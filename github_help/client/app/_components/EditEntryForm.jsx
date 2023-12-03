// import { useState } from "react"
// use zustand?

export default function EditEntryForm({data}) {

    return (
        <main>
            <form onSubmit={}>
                <div>
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
                <section>
                    <div>
                        <label htmlFor="entry-name">Entry Name</label>
                        <div>
                            <input type="text" id="entry-name" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="date">Date</label>
                        <div>
                            <input type="date" id="date" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="favorite">Favorite</label>
                        <input type="checkbox" id="favorite"/>
                    </div>
                </section>
                <section>
                    <label htmlFor="weather">Weather</label>
                    <div>
                        <input type="text" id="weather" />
                    </div>
                </section>
                <section>
                    <label htmlFor="group-members">Group Members</label>
                    <div>
                        <input type="text" id="group-members" />
                    </div>
                </section>
                <section>
                    <label htmlFor="location">Location</label>
                    <div id="location">
                        <div>
                            <label htmlFor="longitude">Longitude</label>
                            <div>
                                <input type="text" id="longitude" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="latitude">Latitude</label>
                            <div>
                                <input type="text" id="latitude" />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <label htmlFor="location-description">Location Description</label>
                    <div>
                        <input type="text" id="location-description" />
                    </div>
                </section>
                <section>
                    <label htmlFor="tools">Tools</label>
                    <div>
                        <input type="text" id="tools" />
                    </div>
                </section>
                <section>
                    <label htmlFor="methods">Methods</label>
                    <div>
                        <input type="text" id="methods" />
                    </div>
                </section>
                <section>
                    <label htmlFor="specimen-description">Specimen Description</label>
                    <div>
                        <input type="text" id="specimen-description" />
                    </div>
                </section>
                <section>
                    <label htmlFor="specimen-details">Specimen Details</label>
                    <div id="specimen-details">
                        <div>
                            <label htmlFor="color">Color</label>
                            <div>
                                <input type="text" id="color" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="hardness">Hardness</label>
                            <div>
                                <input type="text" id="hardness" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="luster">Luster</label>
                            <div>
                                <input type="text" id="luster" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="crystal-forms">Crystal Forms</label>
                            <div>
                                <input type="text" id="crystal-forms" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="density">Density</label>
                            <div>
                                <input type="text" id="density" />
                                g/cm<super>3</super>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="cleavage">Cleavage</label>
                            <div>
                                <input type="text" id="cleavage" />
                            </div>
                        </div>
                    </div>
                </section>
                <div>
                    <button>Confirm</button>
                    <button>Cancel</button>
                </div>
            </form>
        </main>
    )
}