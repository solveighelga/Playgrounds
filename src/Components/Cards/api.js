import supabase from '../../supabaseClient'
import { useEffect, useState } from 'react'
import Card from './Cards'

// these props act as a parameter to the function
const Api = ({playgrounds, setPlaygrounds, setFilterPlaygrounds, hasFilter}) => {
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const fetchPlaygrounds = async () => {
            const { data, error } = await supabase
                .from('playgrounds')
                .select()

                if (error) {
                    setFetchError('Could not fetch data')
                    setPlaygrounds(null)
                    console.log(error)
                }
                if (data) {
                    setPlaygrounds(data)
                    setFetchError(null)
                    setFilterPlaygrounds(data)
                }
        }

        fetchPlaygrounds()

    }, [])

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {playgrounds && (
                <>
                <div className ="filter">{hasFilter? playgrounds[0].postal + " - " + playgrounds[0].neighborhood: null}</div>
                    <div className ="playgrounds"> 
                    {/* If filtered the postal code and neighborhood will appear if not, then it is empty */}
                        <div className="playground-grid"> </div>
                        {playgrounds.map(playground => (
                            <Card key ={playground.pid} playground={playground} />
                        ))}
                    </div>
                </>
            )}
        </div>

    )
}

export default Api