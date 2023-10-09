import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">Discover & Share
                <br className="max-md:hidden" />
                <span className="green_gradient text-center">Show off</span>
            </h1>
            <p className="desc text_center">This is the place where you can boast about your achievements, seek motivation and discover what others have managed to do or are proud of.</p>
            <Feed />
        </section>
    )
}

export default Home