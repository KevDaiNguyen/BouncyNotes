export default function Layout(props) {
    const {children} = props

    const header = (
        <header>
            <div>
                <h1>Testing</h1>
                <p>Super testing</p>
            </div>
        </header>
    )

    const footer = (
        <footer>
            <p>
                Super long text and I'll even break the line <br />
                So then it can be on the second line
            </p>
        </footer>
    )

    return(
        <>
            {header}
                <main>
                    {children}
                </main>
            {footer}
        </>
    )
}