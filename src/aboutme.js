export const AboutMe = () => {
    return <>
        <div className="card">
            {/* Make about me with avatar and bio */}
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4">
                        <img src="https://avatars.githubusercontent.com/u/59587363?s=400&u=15aba68cb37d34629e24fca48e6ff64b31380115&v=4"/>
                    </div>
                    <hr/>
                    <h2>
                        Olá, sou Alexandre Silva, moro em Brusque - SC, que bom que você me encontrou.<br></br>
                        Sou desenvolvedor web, e estou estudando para me tornar um desenvolvedor melhor.<br></br>
                        Gosto de programar em <span className="javascript">JavaScript</span>, e também de programar em 
                        <span className="python"> Python</span>, e também de programar em <span className="csharp">C#</span>.<br></br>
                        <br></br>
                        <a
                        className="github"
                        href="https://github.com/kwy404" target="_blank">Meu Github</a>
                    </h2>
                </div>
            </div>
        </div>
    </>
}