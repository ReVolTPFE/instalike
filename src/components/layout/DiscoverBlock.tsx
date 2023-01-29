import PhotoCard from '../cards/PhotoCard';

function DiscoverBlock() {
	return (
		<main className="w-screen md:mx-auto md:px-8 lg:px-40 py-8">
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative px-4">
				<PhotoCard imgUrl="https://th.bing.com/th/id/R.e1707c345d5ac10c80a674030e606643?rik=pOsTg5KBoLuNvw&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f08%2fimage-de-paysage.jpg&ehk=1O5SWKkGpZ8yU%2b%2fAnLXG1v8k6BKxgyiXgHbOWBW1ir0%3d&risl=1&pid=ImgRaw&r=0" />
				<PhotoCard imgUrl="https://pixy.org/src/487/4870083.jpg" />
				<PhotoCard imgUrl="https://png.pngtree.com/back_origin_pic/00/06/05/09a27b971263bbfe983a315a2591cc75.jpg" />
				<PhotoCard imgUrl="https://th.bing.com/th/id/OIP.aZ3vzsdzZcLc0brFCniaRgHaE8?pid=ImgDet&rs=1" />
				<PhotoCard imgUrl="https://th.bing.com/th/id/OIP.2ptdu2Ad7BpQYJCfzv9YjwHaEl?pid=ImgDet&rs=1" />
				<PhotoCard imgUrl="https://th.bing.com/th/id/OIP.hfgN3h12ZFnMFpdvkQVRBwHaF5?pid=ImgDet&w=768&h=612&rs=1" />
				<PhotoCard imgUrl="https://parisfutur.com/wp-content/uploads/2019/06/foret-urbaine-hotel-de-ville-1.jpg" />
				<PhotoCard imgUrl="https://vincent.callebaut.org/static/projects/150105_parissmartcity2050/hr/parissmartcity2050_pl052.jpg" />
			</section>

			<h2 className="text-xl font-semibold text-center text-gray-600 mt-8">You are all caught up!</h2>
		</main>
	);
}

export default DiscoverBlock;
