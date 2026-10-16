import type { Address } from "../domain/types";

export const indiaStates = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chandigarh",
  "Chhattisgarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Ladakh",
  "Lakshadweep",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Puducherry",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];
export const emptyAddress = (): Address => ({
  id: crypto.randomUUID(),
  ownerEmail: "",
  name: "",
  phone: "",
  line1: "",
  line2: "",
  city: "",
  state: "",
  pincode: "",
});
export function AddressFields({
  value,
  onChange,
}: {
  value: Address;
  onChange: (value: Address) => void;
}) {
  const change = (field: keyof Address, text: string) =>
    onChange({ ...value, [field]: text });
  return (
    <div className="form-grid">
      <label className="field full-field">
        Full name
        <input
          autoComplete="shipping name"
          required
          minLength={2}
          maxLength={100}
          value={value.name}
          onChange={(e) => change("name", e.target.value)}
        />
      </label>
      <label className="field full-field">
        Mobile number
        <div className="phone-input">
          <span>+91</span>
          <input
            type="tel"
            autoComplete="shipping tel-national"
            inputMode="numeric"
            pattern="[6-9][0-9]{9}"
            maxLength={10}
            title="A 10 digit Indian mobile number starting with 6, 7, 8, or 9"
            required
            value={value.phone}
            onChange={(e) => change("phone", e.target.value.replace(/\D/g, ""))}
          />
        </div>
      </label>
      <label className="field full-field">
        Address
        <input
          autoComplete="shipping address-line1"
          required
          minLength={5}
          maxLength={200}
          placeholder="House number, building, street"
          value={value.line1}
          onChange={(e) => change("line1", e.target.value)}
        />
      </label>
      <label className="field full-field">
        Apartment, landmark, etc. <span className="optional">(optional)</span>
        <input
          autoComplete="shipping address-line2"
          maxLength={200}
          value={value.line2}
          onChange={(e) => change("line2", e.target.value)}
        />
      </label>
      <label className="field">
        City
        <input
          autoComplete="shipping address-level2"
          required
          minLength={2}
          maxLength={100}
          value={value.city}
          onChange={(e) => change("city", e.target.value)}
        />
      </label>
      <label className="field">
        PIN code
        <input
          autoComplete="shipping postal-code"
          inputMode="numeric"
          pattern="[1-9][0-9]{5}"
          title="A 6 digit Indian PIN code"
          maxLength={6}
          required
          value={value.pincode}
          onChange={(e) => change("pincode", e.target.value.replace(/\D/g, ""))}
        />
      </label>
      <label className="field">
        State / union territory
        <select
          autoComplete="shipping address-level1"
          required
          value={value.state}
          onChange={(e) => change("state", e.target.value)}
        >
          <option value="">Select state</option>
          {indiaStates.map((state) => (
            <option key={state}>{state}</option>
          ))}
        </select>
      </label>
      <label className="field">
        Country
        <input value="India" readOnly autoComplete="shipping country-name" />
      </label>
    </div>
  );
}
