export default function Loading(){

    return(
        <div>
            <ul className="list-none pl-6 mt-4 space-y-2">
                {Array.from(Array(20).keys()).map((i)=>(
                    <li key={i}>
                    <span className="inline-block animate-pulse h-5 " 
                    style={{
                        animationDelay: `${i* 0.05}s`,
                        animationDuration:'1s,'
                    }} />
                  </li>
                ) )}
            </ul>
        </div>
    )
}