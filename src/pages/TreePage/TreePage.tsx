import { Tree } from 'react-tree-graph';
import 'react-tree-graph/dist/style.css'
import data from './data/data';
import './TreePage.css'

export function TreePage(props: any) {

  const handleClick = (event: any, node: any) => {
    console.log('handle click ', event);
    console.log('handle click node', node);
    alert(`${node} got clicked`);
  }

  return (
    <section className="flex bg-orange-400 h-[95vh] w-[90vw] mt-[2.5vh]">
      <Tree
  animated={true}
  data={data}
  nodeRadius={15}
  margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
  gProps={{
		className: 'node',
		onClick: handleClick
	}}
	height={600}
	width={1000}/>
    </section>
  )
}
