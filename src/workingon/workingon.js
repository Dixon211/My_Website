import './workingon.css';
import jadzi from "./jadzi_clean.PNG"
import warren from "./buffetbot.png"

function Workingon() {
    return(
        <div>
            <div className="workingsection">
                <label className="worktitle">Magic Card Identifier</label>
                <div className="descriptionplate">
                    <div className="descriptionpara">
                        <p className="descriptiontext">This project has been fun to work on as it really has given me a chance to really understand Computer Vision (CV) and Optical Character Recognition (OCR). I play a bit of Magic: the Gathering and have a few friends who work at card stores. They regularly have to reprice the cards in the high end case as they can fluctuate. This means taking +500 cards out of the case, looking up each of the cards, repricing them, and then putting them all back. It is an all day task that has to happen twice a week.</p>
                        <p className="descriptiontext">For this project I am using the module OpenCV2 in python to get a videostream, then using easyocr to identity the text and the position of it. To optimize the image for easyocr’s algorithm. I grayscale the image, then give it a slight blur, then threshold it to black and white. Currently I have the project able to find and highlight card on the top half of the image since I mostly care about the card name and then add a rectangle on the identified text.</p>
                        <p className="descriptiontext">The next step is to link this up to the major card selling sites through API’s they have and return the price. I want to make sure the concept works in python, then move it over to kotlin to be able to use your phone as the camera or move the entire application that way for portability. Funnily enough, since these sites are not just for Magic, this app could theoretically be used for any card game that comes out. Including new ones.</p>
                    </div>
                    <div className="imageplate">
                        <img src={jadzi} className="projectimg"></img>
                        <label className="imglabel">An example of OCR finding the card name</label>
                    </div>
                </div>
            </div>
            <div className="workingsection">
                <label className="worktitle">Warren Buffet Bot</label>
                <div className="descriptionplate">
                    <div className="descriptionpara">
                        <p className="descriptiontext">This project is the evolution of the stock bot. I have been working on learning Tensorflow this year and using it to create a neural network. If you haven’t heard, neural networks are a subset of machine learning and is the underlying idea of how ChatGPT works. They are an amazing tool for comparison using large datasets and are able to find connections between data.</p>
                        <p className="descriptiontext">I have been doing my research and working on aspects such as how to get a large enough dataset as a trained neural network really starts to shine above 10,000 pieces of data.The general idea is web scrape the last x number of years of headlines, then use a bot to determine if the story is positive or negative and find any location identifiers such as city, county, etc. Then scrape the last x years of stock data. Setup the network to make connections on when stocks went up and when they went down, then have it make predictions with the new headlines.</p>
                        <p className="descriptiontext">While I have been making good progress on my math and coding skills. Its still a big project and learning the tools has been my first step. I’ve created some smaller networks with some known Modified National Institute of Standards and Technology datasets, but want to start using them on more real world data.</p>
                    </div>
                    <div className="imageplate">
                        <img src={warren} className="projectimg"></img>
                        <label className="imglabel">All hail our financial overlords</label>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workingon;