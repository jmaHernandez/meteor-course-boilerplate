import React from 'react';

import PrivateHeader from './PrivateHeader';

// export default class Link extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<PrivateHeader title="Your Links" />
// 				<AddLink />
// 				<LinksList />
// 			</div>
// 		);
// 	}
// }

export default () => {
	return (
		<div>
			<PrivateHeader title="Dashboard" />
			<div className="page-content">
				Dashboard page content
			</div>
		</div>
	);
};