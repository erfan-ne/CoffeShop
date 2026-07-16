import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Resault from '@/components/templates/Search/Resault'
import React from 'react'

function SearchPage({resault}) {
  return (
    <>
    <PageHeader route="Search" />
    <Resault Search={resault} />
    </>
  )
}

export async function getServerSideProps(contex) {
  const {query} = contex

  const res = await fetch("http://localhost:3001/menu")
  const data = await res.json()

  const searchResault = data.filter(item => item.type.toLowerCase().includes(query.q.toLowerCase()) || item.title.toLowerCase().includes(query.q.toLowerCase()))

  return {
    props : {
      resault: searchResault
    }
  }
}

export default SearchPage