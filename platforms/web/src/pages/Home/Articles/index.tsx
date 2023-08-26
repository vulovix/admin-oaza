import "./style.scss";

const img1 = "https://i.pinimg.com/originals/d7/05/cc/d705cc4b70c51ceabc73adc52207e2aa.jpg";
const img2 = "https://media.istockphoto.com/id/1463238208/photo/bnw-cat.webp?b=1&s=170667a&w=0&k=20&c=nhe6GpA4jmLWtKxp_ga-njclrPvWHbRSK9wVyFAPhVY=";
const img3 = "https://i.pinimg.com/originals/39/5f/ff/395fffc5f7498254bec2f9ce7bcf704a.jpg";

export default function Articles(): JSX.Element {
    return <div className="articles">
        <div className="area-left">
            {/* <div className="article-1">
                <div className="info">
                    <h1>The Great Kale</h1>
                    <p>
                        25 Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dolor soluta numquam illo neque, quia tempore, nobis dicta beatae quidem magni voluptate obcaecati, assumenda fuga?
                    </p>
                </div>
                <div className="img" style={{
                    backgroundImage: `url(`+img1+`)`,
                }}></div>
            </div> */}

            <div className="article-2">
                <div className="reversed">
                    <div className="img" style={{
                        backgroundImage: `url(`+img2+`)`,
                    }}></div>
                    <div className="info">
                        <h1>The brand new Holywood horor is here</h1>
                        {/* <span>March 24, 1966</span> */}
                    </div>
                </div>
                <p>
                    50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nemo distinctio amet possimus tempora dolores at dicta. Delectus quasi aliquid dignissimos, architecto tenetur quam facere porro, ad voluptatum atque totam ratione asperiores non velit a dolore saepe quo odio? Error, magnam natus magni quasi in neque enim sequi sed quos!
                </p>
            </div>

            <div className="divider"></div>

            <div className="article-2">
                <div>
                    <div className="img" style={{
                        backgroundImage: `url(`+img2+`)`,
                    }}></div>
                    <div className="info">
                        <h1>Everyone In Old Old Holywood Was "On Acid"</h1>
                        {/* <span>March 24, 1966</span> */}
                    </div>
                </div>
                <p>
                    50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, nemo distinctio amet possimus tempora dolores at dicta. Delectus quasi aliquid dignissimos, architecto tenetur quam facere porro, ad voluptatum atque totam ratione asperiores non velit a dolore saepe quo odio? Error, magnam natus magni quasi in neque enim sequi sed quos!
                </p>
            </div>
        </div>
        <div className="area-center">
            <div className="article-3">
                <div className="img" style={{
                    backgroundImage: `url(`+img3+`)`,
                }}></div>
                <span className="category">Trending</span>
                <h1>Holywood goes na-na over the thin man.</h1>
                <p>
                    100 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, alias dolores exercitationem ducimus vel odio. Eligendi, perspiciatis modi sapiente magni dolore iste cupiditate voluptatum laboriosam est debitis fugiat, nihil earum dolorum amet harum aliquid nostrum illum placeat possimus, ipsum rerum tempora. Itaque et nesciunt vero quidem, exercitationem doloribus inventore ut dignissimos eveniet ipsa deserunt libero. Voluptate aliquid incidunt quidem quae praesentium. Ratione esse nobis ullam officia eius consectetur reiciendis nihil modi deleniti soluta qui, blanditiis magnam sint perferendis fugiat. Velit, dolore saepe. Provident sint ad enim debitis harum culpa labore nostrum vero repellat numquam sapiente, autem iste adipisci ut ab.
                </p>
            </div>
        </div>
        <div className="area-right">
            <div className="ad"></div>
            <div className="article-mini">
                <div className="img" style={{
                    backgroundImage: `url(`+img3+`)`,
                }}></div>
                <div className="info">
                    <h1>The brand new Holywood horor is here</h1>
                    <span>September 24, 1950</span>
                </div>
            </div>
            <div className="article-mini">
                <div className="img" style={{
                    backgroundImage: `url(`+img3+`)`,
                }}></div>
                <div className="info">
                    <h1>The smoking here of Gibson and Vela</h1>
                    <span>January 13, 1914</span>
                </div>
            </div>
            <div className="article-mini">
                <div className="img" style={{
                    backgroundImage: `url(`+img3+`)`,
                }}></div>
                <div className="info">
                    <h1>The brand new Holywood horor is here</h1>
                    <span>October 12, 1970</span>
                </div>
            </div>
            <div className="article-minimal">
                <h1>Elizabet Taylor life in front of camera</h1>
                <span>October 12, 1970</span>
            </div>
            <div className="article-minimal">
                <h1>The smoking here of Gibson and Vela</h1>
                <span>October 12, 1970</span>
            </div>
            <div className="article-minimal">
                <h1>Elizabet Taylor life in front of camera</h1>
                <span>October 12, 1970</span>
            </div>
        </div>
    </div>
}