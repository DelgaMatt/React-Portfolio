import react from "react";

const Contact = () => {
    
    const backgroundColor = {
        backgroundColor: '#474440'
    };

    return (
        <section style={backgroundColor}>
            <h1 className="text-center display-6 p-4 text-light">Contact Me</h1>

            <card className="d-flex justify-content-center pb-4">
                <div className="w-50 sm-w-100 py-8 py-lg-16 px-4 max-w-screen-md border rounded border-light text-light">
                    <p className="mb-8 font-light text-center text-gray-200 sm:text-xl"></p>
                   
                    <form className="">
                        <div className="my-2">
                            <label for="name" className="block mb-2 text-sm">Full name:</label><br></br>
                            <input for="name" id="name"
                                className="border rounded p-2.5 bg-light text-dark w-100"
                                placeholder="Jane Doe" required></input>
                        </div>
                        <div className="my-2">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-100">Your email</label><br></br>
                            <input type="email" id="email"
                                class="border rounded p-2.5 bg-light text-dark w-100"
                                placeholder="name@flowbite.com" required></input>
                        </div>
                        <div className="my-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-100">Your message</label><br></br>
                            <textarea id="message" className="border rounded p-2.5 bg-light text-dark w-100" placeholder="Leave a comment..." required></textarea>
                            </div>
                            <div className="d-flex justify-content-center m-4">
                                <button id="formBtn" type="submit" className="rounded py-3 px-5 text-medium text-center text-white border bg-dark w-50">Send message</button>
                                <div id="alert" className="text-center px-3 mr-5 border-b hidden "></div>
                        </div>
                    </form>

                </div>
            </card>
        </section>
    )
};

export default Contact