import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {
	query,
	getStore
} from '../common/util'
/*本地国际化*/
import zh from './zh'
import en from './en'
/*组件国际化*/
import eleEN from 'element-ui/lib/locale/lang/en'
import eleZH from 'element-ui/lib/locale/lang/zh-CN'

Vue.use(VueI18n)
Vue.config.lang = query().lang || getStore('lang') || 'zh'

var locale = {}

/*合并国际化文件*/
function addLang(key, a, b) {
	locale[key] = Object.assign(a, b)
}
addLang('zh', zh, eleZH)
addLang('en', en, eleEN)

/*国际化设置*/
var i18n = new VueI18n({
	locale: Vue.config.lang,
	messages: locale
})

export default i18n