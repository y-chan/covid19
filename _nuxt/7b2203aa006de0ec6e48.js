(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{460:function(t){t.exports=JSON.parse('{"data":{"認定こども園":8,"北播磨総合医療センター":5,"宝塚第一病院":8,"仁恵病院":14,"神戸市中央市民病院":14,"グリーンアルス関係":53,"介護保険通所事業所":7,"ライブ関係":13,"海外渡航関係":24,"その他":74,"行動歴調査中":135,"特定できず":7},"last_update":"2020-04-12T00:00:00+09:00"}')},461:function(t){t.exports=JSON.parse("{}")},474:function(t,e,r){"use strict";r.r(e);var c=r(305),o=r(334),n=r(335),d=r(460),h=(r(461),r(337)),m=r(341),l=r(339),f=r(338),$=r(340),y=r(336),C=r(104),w={components:{ConfirmedCasesDetailsCard:h.a,ConfirmedCasesNumberCard:m.a,ConfirmedCasesAttributesCard:l.a,TestedNumberCard:f.a,PatientsByAge:$.a,PatientsByClusters:y.a},data:function(){var title,t;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=o.last_update;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=c.last_update;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=c.last_update;break;case"number-of-tested":title=this.$t("検査実施件数"),t=o.last_update;break;case"patients-by-age":title=this.$t("年代別陽性患者数"),t=n.last_update;break;case"patients-by-clusters":title=this.$t("クラスター別陽性患者数"),t=d.last_update}var data={title:title,updatedTimeStr:Object(C.d)(t)};return data},head:function(){var t="https://stop-covid19-hyogo.org",e=(new Date).getTime(),r="ja"===this.$i18n.locale?"".concat(t,"/ogp/").concat(this.$route.params.card,".png?t=").concat(e):"".concat(t,"/ogp/").concat(this.$i18n.locale,"/").concat(this.$route.params.card,".png?t=").concat(e),c="".concat(this.$t("兵庫県の新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、有志の仲間が開設したまとめサイトです。")+this.$t("兵庫県内の感染者数、検査実施件数、入院患者数などをわかりやすく伝えることで、現状を把握して適切な対策を取れるようにすることを目的としています。"));return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | "+this.$t("兵庫県非公式")+" "+this.$t("新型コロナウイルス")+this.$t("まとめサイト")},{hid:"description",name:"description",content:c},{hid:"og:description",property:"og:description",content:c},{hid:"og:image",property:"og:image",content:r},{hid:"twitter:image",name:"twitter:image",content:r}]}}},_=r(5),component=Object(_.a)(w,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"patients-by-age"==this.$route.params.card?e("patients-by-age"):"patients-by-clusters"==this.$route.params.card?e("patients-by-clusters"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);