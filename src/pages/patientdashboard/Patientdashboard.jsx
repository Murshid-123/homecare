import React from 'react'
import Vital_information from '../../components/vital_informtion/Vital_information';
import Upcomingappointments from '../../components/upcomingappointments/Upcomingappointments';

function Patientdashboard() {


  const appointments = [
    {doctor : "Dr Smith" , department :"Dermatologist" ,date : "Dec 20, 2023" , time : "3:00 PM"},
    {doctor : "Dr Neha" , department :"Gastrology" ,date : "Dec 20, 2023" , time : "3:00 PM"},
    {doctor : "Dr Johnson" , department :"Cardiology" ,date : "Dec 20, 2023" , time : "3:00 PM"},
    {doctor : "Dr Mathiew" , department :"Cardiology" ,date : "Dec 20, 2023" , time : "3:00 PM"},
    {doctor : "Dr jakes" , department :"Cardiology" ,date : "Dec 20, 2023" , time : "3:00 PM"},
  ]


 const Vitalinformation =[
  { label: 'PatientID', value: '32' },
  { label: 'BMI', value: '22' },
  { label: 'Blood Pressure', value: '120/80 mmHg' },
  { label: 'Heart Rate', value: '72 bpm' },
  { label: 'Temperature', value: '98.6°F' },
  { label: 'allergic', value: 'yes' },
  { label: 'medicine', value: 'yes' },
  { label: 'height', value: '160' },
  { label: 'weight', value: '67' },
  { label: 'age', value: '45' },
  { label: 'diabetis', value: 'yes' },
  { label: 'dementia', value: 'no' },

  // Add more vital information as needed
];




  return (
    <div className='w-full h-full  '>
        <div className='text-center text-3xl hover:bg-blue-600 bg-blue-500 py-5 font-semibold text-fuchsia-50 sticky top-0 z-50'>
            Details of Patient : Murshid
        </div>
        <div className='flex'>
          <div className=' bg-gray-800 text-white sticky top-16' style={{flex:1 , height: `95vh`}}>
            <h1 className='text-center text-2xl my-5'>Personal Informations</h1>
            <div className=''>
              <ul className='flex flex-col justify-center '>
                  <li className='my-2 px-4 text-lg'>
                  Full name : <span>Murshid</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  Age : <span>23</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  Sex : <span>Male</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  State : <span>California</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  City : <span>Los Angeles</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  Contact number : <span>9534765972</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  Email : <span>murshidpgv@gmail.com</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  Emergency contact : <span>678378378383</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  Insurance number : <span>53673838</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                   height : <span>170</span>
                  </li>
                  <li className='my-2 px-4 text-lg'>
                  weight : <span>65</span>
                  </li>
              </ul>
            </div>

          </div>
          <div className='' style={{flex:3}}>
            <div>
              <div className='text-2xl text-center p-3 font-semibold'>
                Vital Statistics
              </div>
              <div className="flex justify-center">
                <hr className='my-2 border-gray-500 w-3/4' />
              </div>
              <div className='flex flex-wrap p-3 mx-auto my-3'>
                {Vitalinformation.map((vitalData,i)=>(
                  <Vital_information key={i} data={vitalData}/>
                ))}  
              </div>
            </div>

            <div>
              <div className='text-2xl text-center p-3 font-semibold'>
                Upcoming Appointments
              </div>
              <div className="flex justify-center mb-3">
                <hr className='my-2 border-gray-500 w-3/4' />
              </div>
              <div class="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
                {appointments.map((a,i)=>
                <Upcomingappointments key={i} data={a}/>
                )}
                
                <div class="mt-4 text-center">
                  <a href="#" class="text-blue-500 hover:underline">View All Appointments</a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Patientdashboard;