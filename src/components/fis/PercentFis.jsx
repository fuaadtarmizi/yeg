import React from 'react'
import { Progress } from "@/components/ui/progress"


function PercentFis() {
  return (
    <main>
      <div>
        <div className="flex justify-between">
          <h className="text-xl font-bold">Ilmu Ibadah</h>
          <h className="text-xl font-bold ">33%</h>
        </div>
        <div>
      <Progress value={33} />
      <div/>
    </div>
    <div>
      <Progress value={33} />
    </div>
    <div>
      <Progress value={33} />
    </div>
    </div>
    </main>
    
    
  )
}

export default PercentFis