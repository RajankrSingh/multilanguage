'use client'

import { useState, useEffect } from 'react';
import { getDictionary } from "../../../getDictionary";

export default function Home({ params }) {
  const [currentLang, setCurrentLang] = useState(params.lang);
  const [lang, setLang] = useState(getDictionary(currentLang));

  const handleLanguageChange = async (newLang) => {
    setCurrentLang(newLang);
    setLang(await getDictionary(newLang));
  };

  return (
    <main>  <div> 
    <label class="flex items-center ... mb-6 ... font-bold ... text-2xl ..."><label>{lang.form?.job}</label></label>
  </div>
      <div> 
        <label>{lang.form?.name}</label>
        <input type="text"  class="border-solid border-2 border-indigo-600 ... ml-10 ... mb-6 ..."/>
      </div>
      <div>
        <label>{lang.form?.email}</label>
        <input type="email"  class="border-solid border-2 border-indigo-600 ... ml-10 ... mb-6 ..."/>
      </div>
      <div>
        <label>{lang.form?.city}</label>
        <input type="text"  class="border-solid border-2 border-indigo-600 ... ml-14 ... mb-6 ..."/>
      </div>
      <div> 
        <label>{lang.form?.mobile}</label>
        <input type="text"  class="border-solid border-2 border-indigo-600 ... ml-6 ... mb-6 ..."/>
      </div>
      <div>
        <label>{lang.form?.address}</label>
        <input type="text"  class="border-solid border-2 border-indigo-600 ... ml-6 ... mb-6 ..."/>
      </div>
      <div>
        <label>{lang.form?.date}</label>
        <input type="text"  class="border-solid border-2 border-indigo-600 ... ml-12 ... mb-6 ..."/>
      </div>
      <div>
      <label>{lang.form?.desc} : </label><br></br><br></br>
        <label>{lang.form?.description}</label>
        
      </div>

      <div>
        <label>Select Language: </label>
        <select
          value={currentLang}
          onChange={(e) => handleLanguageChange(e.target.value)}
        >
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>

      {/* <button
        type="button"
        className="ml-12 ... text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() => handleLanguageChange(currentLang === 'en' ? 'hi' : 'en')}
      >
        Language Change
      </button> */}
    </main>
  )
}