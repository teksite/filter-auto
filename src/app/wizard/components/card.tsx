import Image from "next/image";

export function Card({title ,selected=false, image}: { title: string ,selected:boolean, image?: string }) {
    const classCss:string = selected ? 'bg-gray-400 hover:bg-gray-500 text-white' : 'bg-gray-100 hover:bg-gray-200 text-zinc-800'

    return (
        <div className={`p-6 text-center rounded-lg ${classCss}`}>
            {image && <Image src={image} alt={title} width={200} height={200} />}
            <span className="font-semibold text-center">{title}</span>
        </div>
    );
}