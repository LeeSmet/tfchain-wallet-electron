import {AssertionError, AttributeError, BaseException, DeprecationWarning, Exception, IndexError, IterableError, KeyError, NotImplementedError, RuntimeWarning, StopIteration, UserWarning, ValueError, Warning, __JsIterator__, __PyIterator__, __Terminal__, __add__, __and__, __call__, __class__, __envir__, __eq__, __floordiv__, __ge__, __get__, __getcm__, __getitem__, __getslice__, __getsm__, __gt__, __i__, __iadd__, __iand__, __idiv__, __ijsmod__, __ilshift__, __imatmul__, __imod__, __imul__, __in__, __init__, __ior__, __ipow__, __irshift__, __isub__, __ixor__, __jsUsePyNext__, __jsmod__, __k__, __kwargtrans__, __le__, __lshift__, __lt__, __matmul__, __mergefields__, __mergekwargtrans__, __mod__, __mul__, __ne__, __neg__, __nest__, __or__, __pow__, __pragma__, __proxy__, __pyUseJsNext__, __rshift__, __setitem__, __setproperty__, __setslice__, __sort__, __specialattrib__, __sub__, __super__, __t__, __terminal__, __truediv__, __withblock__, __xor__, abs, all, any, assert, bool, bytearray, bytes, callable, chr, copy, deepcopy, delattr, dict, dir, divmod, enumerate, filter, float, getattr, hasattr, input, int, isinstance, issubclass, len, list, map, max, min, object, ord, pow, print, property, py_TypeError, py_iter, py_metatype, py_next, py_reversed, py_typeof, range, repr, round, set, setattr, sorted, str, sum, tuple, zip} from './org.transcrypt.__runtime__.js';
import * as jsarr from './tfchain.polyfill.array.js';
import * as jsobj from './tfchain.polyfill.encoding.object.js';
import * as jsstr from './tfchain.polyfill.encoding.str.js';
import {random as crandom} from './tfchain.polyfill.crypto.js';
import {SiaBinaryEncoder} from './tfchain.encoding.siabin.js';
import {CoinInput, CoinOutput} from './tfchain.types.IO.js';
import {BinaryData, Currency} from './tfchain.types.PrimitiveTypes.js';
import {ConditionBaseClass, ConditionNil} from './tfchain.types.ConditionTypes.js';
import {FulfillmentBaseClass, FulfillmentSingleSignature} from './tfchain.types.FulfillmentTypes.js';
import * as FulfillmentTypes from './tfchain.types.FulfillmentTypes.js';
import * as ConditionTypes from './tfchain.types.ConditionTypes.js';
import {TransactionBaseClass, TransactionVersion} from './tfchain.types.transactions.Base.js';
var __name__ = 'tfchain.types.transactions.Minting';
export var TransactionV128 =  __class__ ('TransactionV128', [TransactionBaseClass], {
	__module__: __name__,
	_SPECIFIER: bytes ('minter defin tx '),
	get __init__ () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._mint_fulfillment = null;
		self._mint_condition = null;
		self._miner_fees = [];
		self._data = null;
		self._nonce = BinaryData (crandom (8), __kwargtrans__ ({strencoding: 'base64'}));
		self._parent_mint_condition = null;
		__super__ (TransactionV128, '__init__') (self);
	});},
	get _custom_version_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return TransactionVersion.MINTER_DEFINITION;
	});},
	get _custom_miner_fees_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._miner_fees;
	});},
	get _custom_data_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._data == null) {
			return BinaryData (__kwargtrans__ ({strencoding: 'base64'}));
		}
		return self._data;
	});},
	get _custom_data_setter () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._data = null;
			return ;
		}
		if (isinstance (value, BinaryData)) {
			var value = value.value;
		}
		else if (isinstance (value, str)) {
			var value = jsstr.to_utf8 (value);
		}
		if (len (value) > 83) {
			var __except0__ = ValueError ('arbitrary data can have a maximum bytes length of 83, {} exceeds this limit'.format (len (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._data = BinaryData (__kwargtrans__ ({value: value, strencoding: 'base64'}));
	});},
	get _get_mint_condition () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._mint_condition == null) {
			return ConditionNil ();
		}
		return self._mint_condition;
	});},
	get _set_mint_condition () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._mint_condition = null;
			return ;
		}
		if (!(isinstance (value, ConditionBaseClass))) {
			var __except0__ = py_TypeError ("MintDefinition (v128) Transaction's mint condition has to be a subtype of ConditionBaseClass, not {}".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._mint_condition = value;
	});},
	get _get_parent_mint_condition () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_mint_condition == null) {
			return ConditionNil ();
		}
		return self._parent_mint_condition;
	});},
	get _set_parent_mint_condition () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._parent_mint_condition = null;
			return ;
		}
		if (!(isinstance (value, ConditionBaseClass))) {
			var __except0__ = py_TypeError ("MintDefinition (v128) Transaction's parent mint condition has to be a subtype of ConditionBaseClass, not {}".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._parent_mint_condition = value;
	});},
	get mint_fulfillment_defined () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._mint_fulfillment != null;
	});},
	get _get_mint_fulfillment () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._mint_fulfillment == null) {
			return FulfillmentSingleSignature ();
		}
		return self._mint_fulfillment;
	});},
	get _set_mint_fulfillment () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._mint_fulfillment = null;
			return ;
		}
		if (!(isinstance (value, FulfillmentBaseClass))) {
			var __except0__ = py_TypeError ("MintDefinition (v128) Transaction's mint fulfillment has to be a subtype of FulfillmentBaseClass, not {}".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._mint_fulfillment = value;
	});},
	get miner_fee_add () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._miner_fees.append (Currency (__kwargtrans__ ({value: value})));
	});},
	get _signature_hash_input_get () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var extra_objects = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var extra_objects = tuple ();
		}
		var e = SiaBinaryEncoder ();
		e.add_byte (self.version.value);
		e.add_array (TransactionV128._SPECIFIER);
		e.add_array (self._nonce.value);
		if (extra_objects) {
			e.add_all (...extra_objects);
		}
		e.add (self.mint_condition);
		e.add_slice (self.miner_fees);
		e.add (self.data);
		return e.data;
	});},
	get _id_input_compute () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return jsarr.concat (TransactionV128._SPECIFIER, self._binary_encode_data ());
	});},
	get _binary_encode_data () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var encoder = SiaBinaryEncoder ();
		encoder.add_array (self._nonce.value);
		encoder.add_all (self.mint_fulfillment, self.mint_condition, self.miner_fees, self.data);
		return encoder.data;
	});},
	get _from_json_data_object () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._nonce = BinaryData.from_json (data.get_or ('nonce', ''), __kwargtrans__ ({strencoding: 'base64'}));
		self._mint_condition = ConditionTypes.from_json (data.get_or ('mintcondition', jsobj.new_dict ()));
		self._mint_fulfillment = FulfillmentTypes.from_json (data.get_or ('mintfulfillment', jsobj.new_dict ()));
		self._miner_fees = (function () {
			var __accu0__ = [];
			for (var fee of data.get_or ('minerfees', []) || []) {
				__accu0__.append (Currency.from_json (fee));
			}
			return __accu0__;
		}) ();
		self._data = BinaryData.from_json (data.get_or ('arbitrarydata', null) || '', __kwargtrans__ ({strencoding: 'base64'}));
	});},
	get _json_data_object () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return dict ({'nonce': self._nonce.json (), 'mintfulfillment': self.mint_fulfillment.json (), 'mintcondition': self.mint_condition.json (), 'minerfees': (function () {
			var __accu0__ = [];
			for (var fee of self._miner_fees) {
				__accu0__.append (fee.json ());
			}
			return __accu0__;
		}) (), 'arbitrarydata': self.data.json ()});
	});},
	get _extra_signature_requests_new () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_mint_condition == null) {
			return [];
		}
		return self._mint_fulfillment.signature_requests_new (__kwargtrans__ ({input_hash_func: self.signature_hash_get, parent_condition: self._parent_mint_condition}));
	});},
	get _extra_is_fulfilled () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_mint_condition == null) {
			return false;
		}
		return self.mint_fulfillment.is_fulfilled (__kwargtrans__ ({parent_condition: self._parent_mint_condition}));
	});}
});
Object.defineProperty (TransactionV128, 'mint_fulfillment', property.call (TransactionV128, TransactionV128._get_mint_fulfillment, TransactionV128._set_mint_fulfillment));
Object.defineProperty (TransactionV128, 'parent_mint_condition', property.call (TransactionV128, TransactionV128._get_parent_mint_condition, TransactionV128._set_parent_mint_condition));
Object.defineProperty (TransactionV128, 'mint_condition', property.call (TransactionV128, TransactionV128._get_mint_condition, TransactionV128._set_mint_condition));;
export var TransactionV129 =  __class__ ('TransactionV129', [TransactionBaseClass], {
	__module__: __name__,
	_SPECIFIER: bytes ('coin mint tx    '),
	get __init__ () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._mint_fulfillment = null;
		self._coin_outputs = [];
		self._miner_fees = [];
		self._data = null;
		self._nonce = BinaryData (crandom (8), __kwargtrans__ ({strencoding: 'base64'}));
		self._parent_mint_condition = null;
		__super__ (TransactionV129, '__init__') (self);
	});},
	get _custom_version_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return TransactionVersion.MINTER_COIN_CREATION;
	});},
	get _custom_miner_fees_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._miner_fees;
	});},
	get _custom_data_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._data == null) {
			return BinaryData (__kwargtrans__ ({strencoding: 'base64'}));
		}
		return self._data;
	});},
	get _custom_data_setter () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._data = null;
			return ;
		}
		if (isinstance (value, BinaryData)) {
			var value = value.value;
		}
		else if (isinstance (value, str)) {
			var value = jsstr.to_utf8 (value);
		}
		if (len (value) > 83) {
			var __except0__ = ValueError ('arbitrary data can have a maximum bytes length of 83, {} exceeds this limit'.format (len (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._data = BinaryData (__kwargtrans__ ({value: value, strencoding: 'base64'}));
	});},
	get _custom_coin_outputs_getter () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._coin_outputs;
	});},
	get _custom_coin_outputs_setter () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._coin_outputs = [];
		if (jsarr.is_empty (value)) {
			return ;
		}
		for (var co of value) {
			self.coin_output_add (co.value, co.condition, __kwargtrans__ ({id: co.id}));
		}
	});},
	get coin_output_add () {return __get__ (this, function (self, value, condition, id) {
		if (typeof id == 'undefined' || (id != null && id.hasOwnProperty ("__kwargtrans__"))) {;
			var id = null;
		};
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
						case 'condition': var condition = __allkwargs0__ [__attrib0__]; break;
						case 'id': var id = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var co = CoinOutput (__kwargtrans__ ({value: value, condition: condition}));
		co.id = id;
		self._coin_outputs.append (co);
	});},
	get miner_fee_add () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._miner_fees.append (Currency (__kwargtrans__ ({value: value})));
	});},
	get mint_fulfillment_defined () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return self._mint_fulfillment != null;
	});},
	get _get_mint_fulfillment () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._mint_fulfillment == null) {
			return FulfillmentSingleSignature ();
		}
		return self._mint_fulfillment;
	});},
	get _set_mint_fulfillment () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._mint_fulfillment = null;
			return ;
		}
		if (!(isinstance (value, FulfillmentBaseClass))) {
			var __except0__ = py_TypeError ("CoinCreation (v129) Transaction's mint fulfillment has to be a subtype of FulfillmentBaseClass, not {}".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._mint_fulfillment = value;
	});},
	get _get_parent_mint_condition () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_mint_condition == null) {
			return ConditionNil ();
		}
		return self._parent_mint_condition;
	});},
	get _set_parent_mint_condition () {return __get__ (this, function (self, value) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'value': var value = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (value == null) {
			self._parent_mint_condition = null;
			return ;
		}
		if (!(isinstance (value, ConditionBaseClass))) {
			var __except0__ = py_TypeError ("CoinCreation (v129) Transaction's parent mint condition has to be a subtype of ConditionBaseClass, not {}".format (py_typeof (value)));
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self._parent_mint_condition = value;
	});},
	get _signature_hash_input_get () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var extra_objects = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var extra_objects = tuple ();
		}
		var e = SiaBinaryEncoder ();
		e.add_byte (self.version.__int__ ());
		e.add_array (TransactionV129._SPECIFIER);
		e.add_array (self._nonce.value);
		if (extra_objects) {
			e.add_all (...extra_objects);
		}
		e.add_slice (self.coin_outputs);
		e.add_slice (self.miner_fees);
		e.add (self.data);
		return e.data;
	});},
	get _id_input_compute () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return jsarr.concat (TransactionV129._SPECIFIER, self._binary_encode_data ());
	});},
	get _binary_encode_data () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		var encoder = SiaBinaryEncoder ();
		encoder.add_array (self._nonce.value);
		encoder.add_all (self.mint_fulfillment, self.coin_outputs, self.miner_fees, self.data);
		return encoder.data;
	});},
	get _from_json_data_object () {return __get__ (this, function (self, data) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'data': var data = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self._nonce = BinaryData.from_json (data.get_or ('nonce', ''), __kwargtrans__ ({strencoding: 'base64'}));
		self._mint_fulfillment = FulfillmentTypes.from_json (data.get_or ('mintfulfillment', jsobj.new_dict ()));
		self._coin_outputs = (function () {
			var __accu0__ = [];
			for (var co of data.get_or ('coinoutputs', []) || []) {
				__accu0__.append (CoinOutput.from_json (co));
			}
			return __accu0__;
		}) ();
		self._miner_fees = (function () {
			var __accu0__ = [];
			for (var fee of data.get_or ('minerfees', []) || []) {
				__accu0__.append (Currency.from_json (fee));
			}
			return __accu0__;
		}) ();
		self._data = BinaryData.from_json (data.get_or ('arbitrarydata', null) || '', __kwargtrans__ ({strencoding: 'base64'}));
	});},
	get _json_data_object () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		return dict ({'nonce': self._nonce.json (), 'mintfulfillment': self.mint_fulfillment.json (), 'coinoutputs': (function () {
			var __accu0__ = [];
			for (var co of self.coin_outputs) {
				__accu0__.append (co.json ());
			}
			return __accu0__;
		}) (), 'minerfees': (function () {
			var __accu0__ = [];
			for (var fee of self.miner_fees) {
				__accu0__.append (fee.json ());
			}
			return __accu0__;
		}) (), 'arbitrarydata': self.data.json ()});
	});},
	get _extra_signature_requests_new () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_mint_condition == null) {
			return [];
		}
		return self._mint_fulfillment.signature_requests_new (__kwargtrans__ ({input_hash_func: self.signature_hash_get, parent_condition: self._parent_mint_condition}));
	});},
	get _extra_is_fulfilled () {return __get__ (this, function (self) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		if (self._parent_mint_condition == null) {
			return false;
		}
		return self.mint_fulfillment.is_fulfilled (__kwargtrans__ ({parent_condition: self._parent_mint_condition}));
	});}
});
Object.defineProperty (TransactionV129, 'parent_mint_condition', property.call (TransactionV129, TransactionV129._get_parent_mint_condition, TransactionV129._set_parent_mint_condition));
Object.defineProperty (TransactionV129, 'mint_fulfillment', property.call (TransactionV129, TransactionV129._get_mint_fulfillment, TransactionV129._set_mint_fulfillment));;

//# sourceMappingURL=tfchain.types.transactions.Minting.map
