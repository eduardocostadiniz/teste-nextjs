
import {LinkWrapper} from '../../components/Anchors'
import Text from '../../components/Text'

function TableDetail(props) {
  return (
    <div>
      <LinkWrapper href='/'>HOME</LinkWrapper>
      <Text strong size='big' layout='success'>Tabela = {props.id}</Text>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  return { props: { id: params.id } }
}

export default TableDetail
