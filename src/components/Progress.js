import React,{useState} from 'react'
const Progress = ({done,uploadedText}) => {
	const [style, setStyle] = useState({});
	
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		}
		
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="max-w-2xl bg-gray-200 text-center relative">
			<div className="progress-done  bg-yellow-deep h-full w-0 opacity-0 duration-150 absolute top-0 bottom-0 left-0" style={style}>
				
			</div>
			<span className="text-white font-semibold relative z-10"> {uploadedText}</span>
		</div>
	)
}

export default Progress