import React from 'react'

const JobApi = () => {
	const data = null;

	const xhr = new XMLHttpRequest();
	xhr.withCredentials = true;

	xhr.addEventListener('readystatechange', function () {
		if (this.readyState === this.DONE) {
			console.log(this.responseText);
		}
	});

	xhr.open('GET', 'https://indeed12.p.rapidapi.com/jobs/search?query=manager&location=chicago&page_id=1&locality=us&fromage=1&radius=50&sort=date&job_type=permanent');
	xhr.setRequestHeader('x-rapidapi-key', '4ce9a5dbf2msh82a205d2f0c7ef8p1418fdjsn40f61f3e56cf');
	xhr.setRequestHeader('x-rapidapi-host', 'indeed12.p.rapidapi.com');

	xhr.send(data);
	return (
		<div className='h-full w-full'>
			{
				JSON.stringify(xhr)
			}

		</div>
	)
}

export default JobApi
