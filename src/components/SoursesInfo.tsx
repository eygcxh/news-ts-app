
type Source = {
  id: string;
  name: string;
}

interface ISource {
  source: Source;
}

function SourcesInfo(props: ISource) {

  const { source } = props

  return (
    <div>
      <h4 className="text-sm">{source.name}</h4>
    </div>
  )
}

export default SourcesInfo