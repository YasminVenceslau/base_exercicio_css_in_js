import { VagaLink, Vagas, VagaTitulo } from './styles'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <Vagas>
    <li>
      <h3>{props.titulo}</h3>
      <ul>
        <VagaTitulo>Localizacao: {props.localizacao}</VagaTitulo>
        <li>Senioridade: {props.nivel}</li>
        <li>Tipo de contratacao: {props.modalidade}</li>
        <li>
          Salário: {props.salarioMin} - {props.salarioMax}
        </li>
        <li>Requisitos: {props.requisitos.join(', ')}</li>
      </ul>
      <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
    </li>
  </Vagas>
)

export default Vaga
