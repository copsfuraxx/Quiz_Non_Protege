function Answer({titre, description})
{
    return(
        <div>
            <h1>{titre}</h1>
            <p>{(description == null) ? "rien" : description}</p>
        </div>
    )
}

export default Answer;