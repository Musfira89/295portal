"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signUpSchema } from "../../../Validations/SignupValidation.js";
import axios from "axios";

const checkboxData = [
  "Health U65",
  "Term Life",
  "Final Expense",
  "Tax Debt",
  "ACA Health Insurance",
  "Long distance moving",
];

export default function SignIn() {
  const router = useRouter();
  const [checkBoxes, setCheckBoxes] = useState([]);

  const handleCheckBoxChange = (value, checked) => {
    if (checked) {
      setCheckBoxes([...checkBoxes, value]);
    } else {
      setCheckBoxes(checkBoxes.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    console.log("value of checkBoxes with time", checkBoxes);
  }, [checkBoxes]);

  // const [user, setUser] = useState({
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   phoneNumber: "",
  //   companyName: "",
  //   skypeHandle: "",
  //   address: "",
  //   city: "",
  //   state: "",
  //   zipCode: "",
  //   country: "",
  //   verticals: [],
  //   userVerified: "",
  // });

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    let formData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      phoneNumber: event.target[4].value,
      companyName: event.target[5].value,
      skypeHandle: event.target[6].value,
      address: event.target[7].value,
      city: event.target[8].value,
      state: event.target[9].value,
      zipCode: event.target[10].value,
      country: event.target[11].value,
      checkBox: checkBoxes,
    };
    console.log("value of target is", checkBoxes);
    console.log("Form data is=====", formData);
    const isValid = await signUpSchema.isValid(formData);
    console.log(isValid);
    if (isValid) {
      //then we have to call to api
      try {
        const res = await axios.post("/api/auth/sign-up", formData);
        console.log("Res of sign-up page is ====", res);
        router.push("/sign-in");
      } catch (error) {
        console.log("error message is====",error)
      }
    }
  };

  return (
    <main>
      <div>
        {/* <!-- component --> */}
        <div class="flex items-center justify-center p-12">
          <div class="mx-auto w-full max-w-[550px]">
            <h1 className="flex items-center justify-center text-2xl mb-8 text-[#6A64F1] font-semibold ">
              Sign up
            </h1>
            <form onSubmit={handleSubmitForm}>
              <div class="-mx-3 flex flex-wrap">
                {/* First Name  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="fName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      // value={user.firstName}
                      // value={values.firstName}
                      // onChange={handleChange}
                      // onChange={(e) =>
                      //   setUser({ ...user, firstName: e.target.value })
                      // }
                      id="fName"
                      placeholder="First Name"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Last Name  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="lName"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      // value={formik.values.lastName}
                      // onChange={formik.handleChange}
                      // value={user.lastName}
                      // onChange={(e) =>
                      //   setUser({ ...user, lastName: e.target.value })
                      // }
                      id="lName"
                      placeholder="Last Name"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Email  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="email"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // value={user.email}
                      // onChange={(e) =>
                      //   setUser({ ...user, email: e.target.value })
                      // }
                      id="email"
                      placeholder="Enter Email"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* password  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="password"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Password
                    </label>
                    <input
                      type="passowrd"
                      name="password"
                      // value={formik.values.email}
                      // onChange={formik.handleChange}
                      // value={user.email}
                      // onChange={(e) =>
                      //   setUser({ ...user, email: e.target.value })
                      // }
                      id="password"
                      placeholder="Enter password"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Phone Number  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="phNumber"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="phNumber"
                      // value={formik.values.phoneNumber}
                      // onChange={formik.handleChange}
                      // value={user.phoneNumber}
                      // onChange={(e) =>
                      //   setUser({ ...user, phoneNumber: e.target.value })
                      // }
                      id="phNumber"
                      placeholder="14155552675"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Company Name  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="company"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      // value={formik.values.companyName}
                      // onChange={formik.handleChange}
                      // value={user.companyName}
                      // onChange={(e) =>
                      //   setUser({ ...user, companyName: e.target.value })
                      // }
                      id="company"
                      placeholder="Enter Company Name"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Skype Handle  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="company"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Skype Handle
                    </label>
                    <input
                      type="text"
                      name="company"
                      // value={user.skypeHandle}
                      // onChange={(e) =>
                      //   setUser({ ...user, skypeHandle: e.target.value })
                      // }
                      id="company"
                      placeholder="Enter Skype Handle"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Address  */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="address"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      // value={user.address}
                      // onChange={(e) =>
                      //   setUser({ ...user, address: e.target.value })
                      // }
                      id="address"
                      placeholder="Enter your Address"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* City */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="city"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      // value={user.city}
                      // onChange={(e) =>
                      //   setUser({ ...user, city: e.target.value })
                      // }
                      id="city"
                      placeholder="Enter your City"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* State */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="state"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      // value={user.state}
                      // onChange={(e) =>
                      //   setUser({ ...user, state: e.target.value })
                      // }
                      id="state"
                      placeholder="Enter your State"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Zip Code */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="zipCode"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Zip Code
                    </label>
                    <input
                      type="number"
                      name="zipCode"
                      // value={user.zipCode}
                      // onChange={(e) =>
                      //   setUser({ ...user, zipCode: e.target.value })
                      // }
                      id="zipCode"
                      placeholder="Enter your Zip Code"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                {/* Country */}
                <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                    <label
                      for="zipCode"
                      class="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Country
                    </label>
                    <select
                      id="country"
                      // value={user.country}
                      // onChange={(e) =>
                      //   setUser({ ...user, country: e.target.value })
                      // }
                      name="country"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    >
                      <option value="None">None</option>
                      <option value="Afghanistan">Afghanistan</option>
                      <option value="Åland Islands">Åland Islands</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antarctica">Antarctica</option>
                      <option value="Antigua and Barbuda">
                        Antigua and Barbuda
                      </option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bosnia and Herzegovina">
                        Bosnia and Herzegovina
                      </option>
                      <option value="Botswana">Botswana</option>
                      <option value="Bouvet Island">Bouvet Island</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Territory">
                        British Indian Ocean Territory
                      </option>
                      <option value="Brunei Darussalam">
                        Brunei Darussalam
                      </option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">
                        Central African Republic
                      </option>
                      <option value="Chad">Chad</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos (Keeling) Islands">
                        Cocos (Keeling) Islands
                      </option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Congo, The Democratic Republic of The">
                        Congo, The Democratic Republic of The
                      </option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote D'ivoire">Cote D'ivoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">
                        Dominican Republic
                      </option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">
                        Equatorial Guinea
                      </option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands (Malvinas)">
                        Falkland Islands (Malvinas)
                      </option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Territories">
                        French Southern Territories
                      </option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guernsey">Guernsey</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guinea-bissau">Guinea-bissau</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Heard Island and Mcdonald Islands">
                        Heard Island and Mcdonald Islands
                      </option>
                      <option value="Holy See (Vatican City State)">
                        Holy See (Vatican City State)
                      </option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="India">India</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="Iran, Islamic Republic of">
                        Iran, Islamic Republic of
                      </option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jersey">Jersey</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea, Democratic People's Republic of">
                        Korea, Democratic People's Republic of
                      </option>
                      <option value="Korea, Republic of">
                        Korea, Republic of
                      </option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Lao People's Democratic Republic">
                        Lao People's Democratic Republic
                      </option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libyan Arab Jamahiriya">
                        Libyan Arab Jamahiriya
                      </option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macao">Macao</option>
                      <option value="Macedonia, The Former Yugoslav Republic of">
                        Macedonia, The Former Yugoslav Republic of
                      </option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Micronesia, Federated States of">
                        Micronesia, Federated States of
                      </option>
                      <option value="Moldova, Republic of">
                        Moldova, Republic of
                      </option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montenegro">Montenegro</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherlands">Netherlands</option>
                      <option value="Netherlands Antilles">
                        Netherlands Antilles
                      </option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Northern Mariana Islands">
                        Northern Mariana Islands
                      </option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau">Palau</option>
                      <option value="Palestinian Territory, Occupied">
                        Palestinian Territory, Occupied
                      </option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Philippines">Philippines</option>
                      <option value="Pitcairn">Pitcairn</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russian Federation">
                        Russian Federation
                      </option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="Saint Helena">Saint Helena</option>
                      <option value="Saint Kitts and Nevis">
                        Saint Kitts and Nevis
                      </option>
                      <option value="Saint Lucia">Saint Lucia</option>
                      <option value="Saint Pierre and Miquelon">
                        Saint Pierre and Miquelon
                      </option>
                      <option value="Saint Vincent and The Grenadines">
                        Saint Vincent and The Grenadines
                      </option>
                      <option value="Samoa">Samoa</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome and Principe">
                        Sao Tome and Principe
                      </option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Serbia">Serbia</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore">Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="South Georgia and The South Sandwich Islands">
                        South Georgia and The South Sandwich Islands
                      </option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Svalbard and Jan Mayen">
                        Svalbard and Jan Mayen
                      </option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syrian Arab Republic">
                        Syrian Arab Republic
                      </option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania, United Republic of">
                        Tanzania, United Republic of
                      </option>
                      <option value="Thailand">Thailand</option>
                      <option value="Timor-leste">Timor-leste</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad and Tobago">
                        Trinidad and Tobago
                      </option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks and Caicos Islands">
                        Turks and Caicos Islands
                      </option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="United States">United States</option>
                      <option value="United States Minor Outlying Islands">
                        United States Minor Outlying Islands
                      </option>
                      <option value="Uruguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Viet Nam">Viet Nam</option>
                      <option value="Virgin Islands, British">
                        Virgin Islands, British
                      </option>
                      <option value="Virgin Islands, U.S.">
                        Virgin Islands, U.S.
                      </option>
                      <option value="Wallis and Futuna">
                        Wallis and Futuna
                      </option>
                      <option value="Western Sahara">Western Sahara</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Choose Verticles */}
              <div class="grid grid-cols-3 max-w-full relative  mb-36 px-3 sm:w-1/2 ">
                <h2 className="mb-3 mr-8 absolute top-0 left-0 text-base font-medium text-[#07074D]">
                  Choose Verticals
                </h2>
                <div className="grid grid-cols-3 absolute top-8 mb-12 sm:w-[400px] md:w-[500px] lg:w-[700px] rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                  {checkboxData.map((item, index) => (
                    <div className="py-3">
                      <input
                        type="checkbox"
                        id="health"
                        name="health"
                        value={item}
                        onChange={(e) =>
                          handleCheckBoxChange(e.target.value, e.target.checked)
                        }
                      />
                      <label for="health"> {item}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="">
                <button className="hover:shadow-form md:mt-20 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
