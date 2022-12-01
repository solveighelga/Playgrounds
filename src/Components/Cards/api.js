import supabase from '../../supabaseClient'
import { useEffect, useState } from 'react'
import Card from './Cards'

const Api = () => {
    const [fetchError, setFetchError] = useState(null)
    const [playgrounds, setPlaygrounds] = useState(null)

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
                }
        }

        fetchPlaygrounds()

    }, [])

    return (
        <div>
            {fetchError && (<p>{fetchError}</p>)}
            {playgrounds && (
                <div className ="playgrounds">
                    <div className="playground-grid"> </div>
                    {playgrounds.map(playground => (
                        <Card key ={playground.pid} playground={playground} />
                    ))}
                </div>
            )}
        </div>

    )
}

export default Api