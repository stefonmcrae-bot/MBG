import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface VehicleSelectorValue {
  year?: string;
  make?: string;
  model?: string;
  vin?: string;
  licensePlateState?: string;
  licensePlate?: string;
}

export interface VehicleSelectorProps {
  value?: VehicleSelectorValue;
  onChange: (value: VehicleSelectorValue & { isComplete: boolean }) => void;
  showErrors?: boolean;
}

interface VINDecodeResult {
  ModelYear?: string;
  Make?: string;
  Model?: string;
}

// US States list
const US_STATES = [
  { value: 'AL', label: 'Alabama' },
  { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' },
  { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' },
  { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' },
  { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' },
  { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' },
  { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' },
  { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' },
  { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' },
  { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' },
  { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' },
  { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' },
  { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' },
  { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' },
  { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' },
  { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' },
  { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' },
  { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' },
  { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' },
  { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' },
  { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' },
  { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' },
  { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' },
  { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' },
  { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' },
  { value: 'WY', label: 'Wyoming' },
  { value: 'DC', label: 'District of Columbia' },
];

const VehicleSelector: React.FC<VehicleSelectorProps> = ({
  value = {},
  onChange,
  showErrors = false,
}) => {
  const [year, setYear] = useState(value.year || '');
  const [make, setMake] = useState(value.make || '');
  const [model, setModel] = useState(value.model || '');
  const [vin, setVin] = useState(value.vin || '');
  const [licensePlateState, setLicensePlateState] = useState(value.licensePlateState || '');
  const [licensePlate, setLicensePlate] = useState(value.licensePlate || '');

  const [loadingVIN, setLoadingVIN] = useState(false);
  const [vinConfirmVisible, setVinConfirmVisible] = useState(false);
  const [vinDecodeData, setVinDecodeData] = useState<VINDecodeResult | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);

  const vinDebounceRef = useRef<NodeJS.Timeout | null>(null);

  // Sync with value prop changes
  useEffect(() => {
    if (value.year !== undefined) setYear(value.year || '');
    if (value.make !== undefined) setMake(value.make || '');
    if (value.model !== undefined) setModel(value.model || '');
    if (value.vin !== undefined) setVin(value.vin || '');
    if (value.licensePlateState !== undefined) setLicensePlateState(value.licensePlateState || '');
    if (value.licensePlate !== undefined) setLicensePlate(value.licensePlate || '');
  }, [value]);

  // Generate year options (1990 to current year)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1989 }, (_, i) => {
    const year = currentYear - i;
    return { label: year.toString(), value: year.toString() };
  });

  // VIN decoding
  const decodeVIN = useCallback((vinInput: string) => {
    if (vinInput.length !== 17) {
      setLoadingVIN(false);
      return;
    }

    setLoadingVIN(true);
    setApiError(null);
    fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/DecodeVINValuesExtended/${vinInput}?format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Results && data.Results[0]) {
          const result = data.Results[0];
          const decodeData: VINDecodeResult = {
            ModelYear: result.ModelYear,
            Make: result.Make,
            Model: result.Model,
          };

          setVinDecodeData(decodeData);

          // Check if VIN vehicle differs from current selection
          const yearDiff = decodeData.ModelYear !== year;
          const makeDiff = decodeData.Make !== make;
          const modelDiff = decodeData.Model !== model;

          if (yearDiff || makeDiff || modelDiff) {
            setVinConfirmVisible(true);
          } else {
            // Values match, no confirmation needed
            setVinConfirmVisible(false);
          }
        }
        setLoadingVIN(false);
      })
      .catch((err) => {
        console.error('Failed to decode VIN:', err);
        setApiError('Failed to decode VIN. Please try again or enter manually.');
        setLoadingVIN(false);
      });
  }, [year, make, model]);

  // Debounced VIN decode
  useEffect(() => {
    if (vinDebounceRef.current) {
      clearTimeout(vinDebounceRef.current);
    }

    if (vin.length === 17) {
      vinDebounceRef.current = setTimeout(() => {
        decodeVIN(vin);
      }, 400);
    } else {
      setVinConfirmVisible(false);
      setVinDecodeData(null);
    }

    return () => {
      if (vinDebounceRef.current) {
        clearTimeout(vinDebounceRef.current);
      }
    };
  }, [vin, decodeVIN]);

  const handleUseVINVehicle = () => {
    if (!vinDecodeData) return;

    setYear(vinDecodeData.ModelYear || '');
    setMake(vinDecodeData.Make || '');
    setModel(vinDecodeData.Model || '');
    setVinConfirmVisible(false);
  };

  const handleKeepSelection = () => {
    setVinConfirmVisible(false);
  };

  // Handle year change
  const handleYearChange = (newYear: string) => {
    setYear(newYear);
  };

  // Emit changes
  useEffect(() => {
    const isComplete =
      !!year &&
      !!make &&
      !!model &&
      !!licensePlateState &&
      !!licensePlate;

    onChange({
      year,
      make,
      model,
      vin,
      licensePlateState,
      licensePlate,
      isComplete,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, make, model, vin, licensePlateState, licensePlate]);

  // Validation errors
  const showYearError = showErrors && !year;
  const showMakeError = showErrors && !make;
  const showModelError = showErrors && !model;
  const showLicensePlateStateError = showErrors && !licensePlateState;
  const showLicensePlateError = showErrors && !licensePlate;

  return (
    <div className="space-y-6">
      {/* API Error */}
      {apiError && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-red-800">{apiError}</p>
          </div>
        </div>
      )}

      {/* Year */}
      <div>
        <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
          Year <span className="text-red-500">*</span>
        </label>
        <select
          value={year}
          onChange={(e) => handleYearChange(e.target.value)}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all',
            showYearError && 'border-red-500'
          )}
        >
          <option value="">Select year</option>
          {yearOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {showYearError && (
          <p className="text-red-500 text-sm mt-1">Year is required</p>
        )}
      </div>

      {/* Make */}
      <div>
        <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
          Make <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="Enter vehicle make (e.g., Toyota, Ford, BMW)"
          className={cn(
            'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all',
            showMakeError && 'border-red-500'
          )}
        />
        {showMakeError && (
          <p className="text-red-500 text-sm mt-1">Make is required</p>
        )}
      </div>

      {/* Model */}
      <div>
        <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
          Model <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter vehicle model (e.g., Camry, F-150, X5)"
          className={cn(
            'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all',
            showModelError && 'border-red-500'
          )}
        />
        {showModelError && (
          <p className="text-red-500 text-sm mt-1">Model is required</p>
        )}
      </div>

      {/* License Plate State (required) */}
      <div>
        <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
          License Plate State <span className="text-red-500">*</span>
        </label>
        <select
          value={licensePlateState}
          onChange={(e) => setLicensePlateState(e.target.value)}
          className={cn(
            'w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all',
            showLicensePlateStateError && 'border-red-500'
          )}
        >
          <option value="">Select state</option>
          {US_STATES.map((state) => (
            <option key={state.value} value={state.value}>
              {state.label}
            </option>
          ))}
        </select>
        {showLicensePlateStateError && (
          <p className="text-red-500 text-sm mt-1">License plate state is required</p>
        )}
      </div>

      {/* License Plate (required) */}
      <div>
        <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
          License Plate <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={licensePlate}
          onChange={(e) => {
            const upperPlate = e.target.value.toUpperCase().slice(0, 10);
            setLicensePlate(upperPlate);
          }}
          placeholder="Enter license plate number"
          maxLength={10}
          disabled={!licensePlateState}
          className={cn(
            'w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all uppercase font-mono',
            showLicensePlateError && 'border-red-500',
            !licensePlateState && 'bg-slate-100 cursor-not-allowed'
          )}
        />
        {showLicensePlateError && (
          <p className="text-red-500 text-sm mt-1">License plate is required</p>
        )}
      </div>

      {/* VIN (optional) */}
      <div>
        <label className="block text-sm font-medium text-[#0E0E0F] mb-2">
          VIN <span className="text-slate-400 text-xs">(optional)</span>
        </label>
        <div className="relative">
          <input
            type="text"
            value={vin}
            onChange={(e) => {
              const upperVIN = e.target.value.toUpperCase().slice(0, 17);
              setVin(upperVIN);
            }}
            placeholder="Enter 17-character VIN"
            maxLength={17}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#007BFF] focus:border-transparent transition-all uppercase font-mono"
          />
          {loadingVIN && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <Loader2 size={16} className="animate-spin text-[#007BFF]" />
            </div>
          )}
        </div>
        {vin.length > 0 && vin.length < 17 && (
          <p className="text-xs text-slate-500 mt-1">
            VIN must be 17 characters
          </p>
        )}
      </div>

      {/* VIN Confirmation */}
      {vinConfirmVisible && vinDecodeData && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-blue-900 mb-2">
                VIN detected: {vinDecodeData.ModelYear} {vinDecodeData.Make}{' '}
                {vinDecodeData.Model}
              </p>
              <p className="text-sm text-blue-800 mb-3">Use this vehicle?</p>
              <div className="flex gap-2">
                <button
                  onClick={handleUseVINVehicle}
                  className="px-4 py-2 bg-[#007BFF] text-white rounded-lg text-sm font-medium hover:bg-[#0066CC] transition-colors"
                >
                  Use VIN vehicle
                </button>
                <button
                  onClick={handleKeepSelection}
                  className="px-4 py-2 bg-white border border-blue-300 text-blue-900 rounded-lg text-sm font-medium hover:bg-blue-50 transition-colors"
                >
                  Keep my selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleSelector;
