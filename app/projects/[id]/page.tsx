export default function ProjectDetails({ params } : {params : {id: string}}) {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center text-primary">Hello World from the project id {params.id}</h1>
            <h2 className={"text-2xl font-bold text-center text-primary"}>
                This is project id : {params.id}
            </h2>
        </div>
    )
}