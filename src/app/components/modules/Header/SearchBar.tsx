import { TextInput } from '@mantine/core'
import React, { useState } from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useQuery } from "@tanstack/react-query"
import { APIGetAllProducts } from '@/app/apis/products';
import showNotify from '@/app/utils/notify';
import useDebounce from '../../hooks/useDeounceHook';
import { useRouter } from 'next/navigation';





const SearchBar = () => {
    const router = useRouter();
    const [title, setTitle] = useState<string>('')
    const [filteredData, setFilteredData] = useState<string[]>([])
    const debouceValue = useDebounce(title, 500)
   
    const getAllDatas = async () => {
        try {
            if (debouceValue) {
                const res = await APIGetAllProducts()
                const result = res.filter((product: any) => {
                    return title && product && product.title && product.title.toLowerCase().includes(title.toLowerCase())
                })
                // console.log(result);
                return result;
            }

        } catch (error) {
            showNotify("error", "Error while fetching data");
        }
    }





    const { data, isLoading } = useQuery({
        queryKey: ['search', debouceValue],
        queryFn: () => getAllDatas()
    })

    console.log(data)

    const handleClick = ({ id }: {id:number}) => {
        router.push(`/products/${id}`)
        setTitle('')
    }


    function SearchResult({ data, isLoading }: { data: any, isLoading: boolean }) {
        return (
            <>
                {data.length > 0 ?
                    <div className="flex flex-col items-start px-4 py-2 w-64 z-50 divide-y rounded-lg mt-1 shadow-md overflow-y-scroll absolute bg-gray-300 max-h-64  divide-gray-100">
                        {isLoading && <div>Loading.....</div>}
                        {
                            data && data?.map((items: any, i: number) => (
                                <div key={i} className=' h-12 cursor-pointer' onClick={() => handleClick(items)}>
                                    {items.title.substring(0, 32)}...

                                </div>
                            ))
                        }
                    </div> : <></>

                }
            </>

        )
    }

    return (
        <div className='  overflow-visible'>
            <TextInput
                onChange={(e) => setTitle(e.target.value)}
                rightSection={<SearchOutlinedIcon fontSize='small' />}
                rightSectionWidth={30}
                styles={{ rightSection: { pointerEvents: 'none' } }}
                placeholder="Search .........."
                size='lg'
                value={title}
                radius="md"
            />
            {data && <SearchResult isLoading={isLoading} data={data} />}
        </div>
    )
}

export default SearchBar