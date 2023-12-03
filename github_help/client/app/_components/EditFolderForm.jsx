export default function EditFolderForm({data}) {

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
                        <label htmlFor="favorite">Favorite</label>
                        <input type="checkbox" id="favorite"/>
                    </div>
                </section>
            </form>
        </main>
    )
}