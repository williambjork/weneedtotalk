import Image from "next/image"



function Message({children, avatar, userName, description}) {
  return (
    <div className="bg-cyan-50 p-8 ml-3 border-b-2 m-3 max-w-md rounded">
        <div className="flex items-center gap-2">
        <Image  
            className="rounded-full"            
            src={avatar}
             width={45}
             height={45} />

            <h2>{userName}</h2>
        </div>
        <div className="py-4">
            <p>{description}</p>
        </div>
        {children}
    </div>
  )
}

export default Message