import './Gif.css'

export default function Gif({ title, id, url }) {
  return (
    <a href={`#${id}`} className="Gif">
      <h4>{title}</h4>
      <img alt={`Gif titled ${title}`} src={url} />
    </a>
  )
}