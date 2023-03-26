import react from "react";

const Contact = () => {
    
    const backgroundColor = {
        backgroundColor: '#474440'
    };


    return (
        <section>
        <div style={backgroundColor} className="jumbotron d-flex vh-100 align-items-center text-light flex-column">
            <h1 className="text-center display-6 pt-5 text-light text-decoration-underline">Contact Me</h1>
            <div className="m-4"> You can also reach me by email <a href="mailto: matthewrdelgado@gmail.com">here</a> or by filling out the form below</div>
            
            <card className="d-flex justify-content-center pb-4 w-50">
                <div className="w-100 py-8 px-4 max-w-screen border rounded border-light text-light">
                    <form>
                        <div className="my-2">
                            <label for="name" className="block mb-2 text-sm">Full name:</label><br></br>
                            <input for="name" id="name"
                                className="border rounded p-1 bg-light text-dark w-100"
                                placeholder="Jane Doe" required></input>
                        </div>
                        <div className="my-2">
                            <label for="email" className="block mb-2 text-sm font-medium ">Your email</label><br></br>
                            <input type="email" id="email"
                                class="border rounded p-1 bg-light text-dark w-100"
                                placeholder="name@flowbite.com" required></input>
                        </div>
                        <div className="my-2">
                            <label for="message" className="block mb-2  font-medium">Your message</label><br></br>
                            <textarea id="message" className="border rounded p-2.5 bg-light text-dark w-100" placeholder="Leave a comment..." required></textarea>
                            </div>
                            <div className="d-flex justify-content-center align-content-center m-4 flex-column">
                                <button id="formBtn" type="submit" href="mailto:matthewrdelgado@gmail.com" className="rounded py-3 px-5 text-medium text-center text-light border bg-dark w-100">Send message</button>
                                <div id="alert" className="text-center px-3 mr-5 border-b hidden"></div>
                        </div>
                    </form>

                </div>
            </card>
        </div>
    </section>
    )
};

export default Contact