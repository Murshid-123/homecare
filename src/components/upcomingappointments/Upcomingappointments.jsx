import React from 'react'

function Upcomingappointments({data}) {
  return (<>
            <div class="space-y-4">
                <div class="flex items-center justify-between border-b pb-2">
                    <div>
                        <p class="text-lg font-semibold">{data.doctor}</p>
                        <p class="text-gray-600">{data.department}</p>
                    </div>
                    <div>
                        <p class="text-gray-600">Date: {data.date}</p>
                        <p class="text-gray-600">Time: {data.time}</p>
                    </div>
                </div>
            </div>
</>
  )
}
                

export default Upcomingappointments