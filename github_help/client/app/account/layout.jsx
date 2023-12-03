import Title from '../_components/Title'

export default function AccountLayout({ children }) {
  return (
    <section>
        <Title />
        {children}
    </section>
  )
}