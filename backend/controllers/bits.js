import { route } from 'easy-express-controllers';

class Bits {
	@route('/api/bits/get');
	getBits() {
		this.send({success: true})
	}
}
export default Bits;
