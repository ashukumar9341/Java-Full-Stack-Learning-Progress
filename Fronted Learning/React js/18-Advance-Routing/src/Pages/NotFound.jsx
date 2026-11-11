import './NotFound.scss'

const NotFound = () => {
    return (
        <main className="not-found">
            <svg
                viewBox="0 0 541 328"
                height="328"
                width="541"
                aria-label="404 page not found"
                role="img"
            >
                <g id="g6219">
                    <line
                        x1="20"
                        y1="300"
                        x2="520"
                        y2="300"
                        stroke="currentColor"
                        strokeWidth="2"
                    />
                    <text
                        x="270"
                        y="220"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="150"
                        fontWeight="700"
                    >
                        404
                    </text>
                </g>
            </svg>
            <p id="errorText">O-o-oh! Something broke.</p>
            <a id="errorLink" href="/">Go Back</a>
        </main>
    )
}

export default NotFound
