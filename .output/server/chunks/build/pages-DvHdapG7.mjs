import { _ as _sfc_main$13 } from '../virtual/entry.mjs';
import { defineComponent, ref, reactive, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import '../_/nitro.mjs';
import 'unhead/server';
import 'unhead/legacy';
import 'unhead/plugins';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'vue-router';
import '../routes/renderer.mjs';
import 'nostics';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@iconify/vue';
import '@vueuse/shared';

//#region app/pages/index.vue?vue&type=script&setup=true&lang.ts
var index_vue_vue_type_script_setup_true_lang_default = /*@__PURE__*/ defineComponent({
	__name: "index",
	__ssrInlineRender: true,
	setup(__props) {
		const language = ref("en");
		const currentRole = ref("participant");
		const isAuthenticated = ref(true);
		const activeModuleIndex = ref(0);
		const latestResult = ref(null);
		const authMode = ref("login");
		const loginForm = reactive({
			email: "mpho@parliament.org",
			password: "password123"
		});
		const registerForm = reactive({
			name: "Mpho Mokete",
			email: "mpho@parliament.org",
			organisation: "CSO Alliance",
			language: "English"
		});
		const moduleAnswers = ref({});
		const modules = ref([
			{
				id: 1,
				titleEn: "Module 1: Civic Participation",
				titleSt: "Mojule 1: Ho kenya letsoho seterekeng",
				descriptionEn: "Understand the democratic process, rights and responsibilities of citizens.",
				descriptionSt: "Utloisisa tshebetso ya demokrasi, ditokelo le maikarabelo a baahi.",
				status: "current",
				progress: 40,
				attempts: 1,
				material: [{
					titleEn: "What is democratic participation?",
					titleSt: "Ho kenya letsoho demokrasi ke eng?",
					bodyEn: "Civic participation is the active involvement of citizens in decisions, elections, policy processes and community development.",
					bodySt: "Ho kenya letsoho seterekeng ke ho nka karolo ka mafolofolo ho dipuisano, dikgethong, dipolotiking le ntshetsopele ya setjhaba."
				}, {
					titleEn: "Rights and responsibilities",
					titleSt: "Ditokelo le maikarabelo",
					bodyEn: "Citizens have the right to vote, speak, organise and access information, while also carrying responsibilities to respect the law and participate responsibly.",
					bodySt: "Baahi ba na le tokelo ya ho khetha, ho bua, ho hlophisa le ho fumana tlhahisoleseding, mme hape ba na le maikarabelo a ho hlompha molao le ho nka karolo ka boikarabelo."
				}],
				quiz: [
					{
						id: "m1q1",
						type: "single",
						promptEn: "Which basic action shows active citizenship?",
						promptSt: "Ke ketso efe ya motheo e bontshang botho ba setjhaba?",
						options: [
							{
								value: "a",
								labelEn: "Voting in elections",
								labelSt: "Ho vouta dikgethong"
							},
							{
								value: "b",
								labelEn: "Ignoring community issues",
								labelSt: "Ho hlokomoloha mathata a setjhaba"
							},
							{
								value: "c",
								labelEn: "Avoiding public discussion",
								labelSt: "Ho qoba dipuisano tsa setjhaba"
							}
						],
						correct: ["a"]
					},
					{
						id: "m1q2",
						type: "truefalse",
						promptEn: "Citizens can participate by attending public consultations.",
						promptSt: "Baahi ba ka nka karolo ka ho ea lipuisanong tsa setjhaba.",
						options: [{
							value: "true",
							labelEn: "True",
							labelSt: "Nnete"
						}, {
							value: "false",
							labelEn: "False",
							labelSt: "Nnete ha e joalo"
						}],
						correct: ["true"]
					},
					{
						id: "m1q3",
						type: "multiple",
						promptEn: "Choose the responsibilities of a citizen.",
						promptSt: "Kgetha maikarabelo a moahi.",
						options: [
							{
								value: "respect-law",
								labelEn: "Respect the law",
								labelSt: "Ho hlompha molao"
							},
							{
								value: "spread-hate",
								labelEn: "Spread hate speech",
								labelSt: "Ho jala puo ya lehloeo"
							},
							{
								value: "vote",
								labelEn: "Vote when eligible",
								labelSt: "Ho vouta ha a loketse"
							}
						],
						correct: ["respect-law", "vote"]
					}
				]
			},
			{
				id: 2,
				titleEn: "Module 2: Election Awareness",
				titleSt: "Mojule 2: Tsebo ka dikgetho",
				descriptionEn: "Learn how elections work, voter rights, and accountability in local democracy.",
				descriptionSt: "Ithute hore dikgetho di sebetsa joang, ditokelo tsa bakhethi le boikarabelo demokrasi ya lehae.",
				status: "locked",
				progress: 0,
				attempts: 0,
				material: [{
					titleEn: "Voter registration",
					titleSt: "Ho ingodisa ho khetha",
					bodyEn: "Voters must be registered and remain informed about election procedures and deadlines.",
					bodySt: "Bakhethi ba tlameha ho ingodisa mme ba be ba tsebe mekhoa le linako tsa dikgetho."
				}, {
					titleEn: "Why accountability matters",
					titleSt: "Hobaneng boikarabelo bo le bohlokoa",
					bodyEn: "Elected leaders are accountable to citizens through regular reporting, public oversight and elections.",
					bodySt: "Baetapele ba khethiloeng ba ikarabella ho baahi ka tlaleho, tekolo ya setjhaba le dikgetho."
				}],
				quiz: [{
					id: "m2q1",
					type: "single",
					promptEn: "What is one key requirement for voting?",
					promptSt: "Ke eng e leng tlhokahalo e le nngwe bakeng sa ho vouta?",
					options: [
						{
							value: "be-registered",
							labelEn: "Be registered",
							labelSt: "Ho ingodisa"
						},
						{
							value: "skip-education",
							labelEn: "Skip civic education",
							labelSt: "Ho tlolela thuto ya setjhaba"
						},
						{
							value: "ignore-law",
							labelEn: "Ignore the law",
							labelSt: "Ho hlokomoloha molao"
						}
					],
					correct: ["be-registered"]
				}, {
					id: "m2q2",
					type: "truefalse",
					promptEn: "Elected officials are expected to be accountable to the public.",
					promptSt: "Baetapele ba khethiloeng ba lebelletsoe ho ikarabella ho setjhaba.",
					options: [{
						value: "true",
						labelEn: "True",
						labelSt: "Nnete"
					}, {
						value: "false",
						labelEn: "False",
						labelSt: "Nnete ha e joal"
					}],
					correct: ["true"]
				}]
			},
			{
				id: 3,
				titleEn: "Module 3: Policy and Advocacy",
				titleSt: "Mojule 3: Leano le boipiletso",
				descriptionEn: "Explore policy issues, advocacy tools and how citizens can influence decision making.",
				descriptionSt: "Hlahloba mathata a maano, disebediswa tsa boipiletso le kamoo baahi ba ka susumetsang ho etswa diqeto.",
				status: "locked",
				progress: 0,
				attempts: 0,
				material: [{
					titleEn: "Forming a policy view",
					titleSt: "Ho theha pono ya leano",
					bodyEn: "Strong policy advocacy relies on evidence, data, lived experience and respectful communication.",
					bodySt: "Boipiletso ba maano bo itšetlehile ka bopaki, datha, boiphihlelo le puisano e hlomphehang."
				}, {
					titleEn: "Engaging stakeholders",
					titleSt: "Ho kenya letsoho ho ba amehang",
					bodyEn: "Citizens can build coalitions, participate in consultations, and present recommendations to leaders.",
					bodySt: "Baahi ba ka theha linthano, ba nka karolo dipuisanong le ho nehelana ka dikgololo ho baetapele."
				}],
				quiz: [{
					id: "m3q1",
					type: "single",
					promptEn: "Which item strengthens advocacy?",
					promptSt: "Ke eng e matlafatsang boipiletso?",
					options: [
						{
							value: "evidence",
							labelEn: "Evidence and facts",
							labelSt: "Bopaki le dintlha"
						},
						{
							value: "silence",
							labelEn: "Silence",
							labelSt: "Khutsitseng"
						},
						{
							value: "rumour",
							labelEn: "Rumours and fear",
							labelSt: "Metswalle e tšosang"
						}
					],
					correct: ["evidence"]
				}, {
					id: "m3q2",
					type: "multiple",
					promptEn: "Select effective advocacy actions.",
					promptSt: "Kgetha diketso tse sebetsang tsa boipiletso.",
					options: [
						{
							value: "consultation",
							labelEn: "Attend consultations",
							labelSt: "Ho ea lipuisanong"
						},
						{
							value: "petition",
							labelEn: "Submit a petition",
							labelSt: "Ho isa petishene"
						},
						{
							value: "ignore",
							labelEn: "Ignore the issue",
							labelSt: "Ho hlokomoloha bothata"
						}
					],
					correct: ["consultation", "petition"]
				}]
			},
			{
				id: 4,
				titleEn: "Module 4: Leadership and Governance",
				titleSt: "Mojule 4: Boetapele le puso",
				descriptionEn: "Understand how good governance supports fairness, service delivery and public trust.",
				descriptionSt: "Utloisisa hore puso e ntle e tshehetsa ho lekana, ho fana ka ditshebeletso le tumelo ya setjhaba.",
				status: "locked",
				progress: 0,
				attempts: 0,
				material: [{
					titleEn: "Principles of good governance",
					titleSt: "Melao ya puso e ntle",
					bodyEn: "Good governance means transparency, accountability, participation, inclusion and rule-based decision making.",
					bodySt: "Puso e ntle e bolela ho hlaka, boikarabelo, ho nka karolo, ho kenyeletsa batho bohle le ho etsa diqeto ho latela molao."
				}, {
					titleEn: "Public trust and service delivery",
					titleSt: "Tumelo ya setjhaba le ho fana ka ditshebeletso",
					bodyEn: "When institutions are transparent and responsive, citizens trust them and participate more meaningfully.",
					bodySt: "Ha ditheo di hlakile le di arabela, baahi ba di tshepa mme ba nka karolo ka mokhoa o tebileng."
				}],
				quiz: [{
					id: "m4q1",
					type: "single",
					promptEn: "What is a governance principle?",
					promptSt: "Ke molawana ofe wa puso?",
					options: [
						{
							value: "transparency",
							labelEn: "Transparency",
							labelSt: "Ho hlaka"
						},
						{
							value: "silence",
							labelEn: "Silence",
							labelSt: "Khutsitseng"
						},
						{
							value: "exclusion",
							labelEn: "Exclusion",
							labelSt: "Ho qheleha ka thoko"
						}
					],
					correct: ["transparency"]
				}, {
					id: "m4q2",
					type: "truefalse",
					promptEn: "Public trust grows when institutions are open and responsive.",
					promptSt: "Tumelo ya setjhaba e hola ha ditheo di bulehile ebile di arabela.",
					options: [{
						value: "true",
						labelEn: "True",
						labelSt: "Nnete"
					}, {
						value: "false",
						labelEn: "False",
						labelSt: "Nnete ha e joal"
					}],
					correct: ["true"]
				}]
			}
		]);
		const adminParticipants = [
			{
				name: "Mpho Mokete",
				progress: 75,
				overall: 82,
				status: "In progress",
				modules: "1/4 complete"
			},
			{
				name: "Lerato Ndlovu",
				progress: 100,
				overall: 91,
				status: "Completed",
				modules: "4/4 complete"
			},
			{
				name: "Thabo Mokoena",
				progress: 50,
				overall: 64,
				status: "In progress",
				modules: "2/4 complete"
			}
		];
		const currentModule = computed(() => modules.value[activeModuleIndex.value]);
		const completedCount = computed(() => modules.value.filter((item) => item.status === "completed").length);
		const overallCourseProgress = computed(() => Math.round(modules.value.reduce((sum, item) => sum + item.progress, 0) / (modules.value.length * 100) * 100));
		const languageLabel = computed(() => language.value === "en" ? "English" : "Sesotho");
		return (_ctx, _push, _parent, _attrs) => {
			const _component_UIcon = _sfc_main$13;
			_push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 text-slate-900" }, _attrs))}><div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"><header class="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-100"><div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div class="flex items-center gap-3"><div class="grid size-11 place-items-center rounded-2xl bg-violet-600 text-lg font-bold text-white shadow-lg shadow-violet-200"> P </div><div><p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Race for Parliament</p><h1 class="text-xl font-bold tracking-tight">Toolkit Platform</h1></div></div><div class="flex items-center gap-3 self-end lg:self-auto"><div class="flex items-center gap-2 rounded-full bg-slate-100 p-1"><button type="button" class="${ssrRenderClass([unref(language) === "en" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500", "rounded-full px-3 py-1.5 text-xs font-semibold transition"])}"> English </button><button type="button" class="${ssrRenderClass([unref(language) === "st" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500", "rounded-full px-3 py-1.5 text-xs font-semibold transition"])}"> Sesotho </button></div><div class="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2"><div class="grid size-8 place-items-center rounded-full bg-violet-100 text-xs font-bold text-violet-700">MM</div><div class="hidden text-left sm:block"><p class="text-[11px] font-semibold text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Participant" : "Mosebedisi")}</p><p class="text-xs font-bold">Mpho Mokete</p></div></div></div></div></header>`);
			if (!unref(isAuthenticated)) {
				_push(`<section class="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]"><div class="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-600 via-violet-500 to-indigo-600 p-8 text-white shadow-xl"><p class="text-xs font-bold uppercase tracking-[0.2em] text-violet-100">${ssrInterpolate(unref(language) === "en" ? "Learning platform" : "Sethala sa ho ithuta")}</p><h2 class="mt-4 text-4xl font-black tracking-tight">${ssrInterpolate(unref(language) === "en" ? "Build informed, active citizens." : "Theha baahi ba tsebang le ba nkang karolo.")}</h2><p class="mt-4 max-w-xl text-sm text-violet-100">${ssrInterpolate(unref(language) === "en" ? "Access bilingual classroom content, unlock modules in sequence, and track your progress as you prepare for public leadership and democratic participation." : "Fumana litaba tsa phaposi tse peli, bula mojule ka tatellano, mme u latele tsoelopele ha u itokisetsa boetapele ba setjhaba le ho nka karolo demokrasi.")}</p><div class="mt-8 grid gap-4 sm:grid-cols-3"><div class="rounded-2xl border border-violet-300/50 bg-white/10 p-4 backdrop-blur-sm"><div class="text-2xl font-black">4</div><p class="mt-2 text-xs text-violet-100">${ssrInterpolate(unref(language) === "en" ? "Structured modules" : "Mojule e hlophisitsoeng")}</p></div><div class="rounded-2xl border border-violet-300/50 bg-white/10 p-4 backdrop-blur-sm"><div class="text-2xl font-black">2</div><p class="mt-2 text-xs text-violet-100">${ssrInterpolate(unref(language) === "en" ? "Languages" : "Lipuo")}</p></div><div class="rounded-2xl border border-violet-300/50 bg-white/10 p-4 backdrop-blur-sm"><div class="text-2xl font-black">100%</div><p class="mt-2 text-xs text-violet-100">${ssrInterpolate(unref(language) === "en" ? "Progress visibility" : "Tlhahiso ea tsoelopele")}</p></div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"><div class="flex items-center justify-between"><div><p class="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Access portal" : "Portal ea ho kena")}</p><h3 class="mt-2 text-2xl font-bold">${ssrInterpolate(unref(authMode) === "login" ? unref(language) === "en" ? "Welcome back" : "Oa amohelehile" : unref(language) === "en" ? "Create account" : "Theha akhaonto")}</h3></div><div class="flex gap-2 rounded-full bg-slate-100 p-1 text-xs font-semibold"><button type="button" class="${ssrRenderClass([unref(authMode) === "login" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500", "rounded-full px-3 py-1.5"])}">Login</button><button type="button" class="${ssrRenderClass([unref(authMode) === "register" ? "bg-white text-violet-700 shadow-sm" : "text-slate-500", "rounded-full px-3 py-1.5"])}">Register</button></div></div>`);
				if (unref(authMode) === "login") _push(`<form class="mt-6 space-y-4"><label class="block text-sm font-medium text-slate-700"> Email <input${ssrRenderAttr("value", unref(loginForm).email)} type="email" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400 focus:bg-white" placeholder="name@organisation.org"></label><label class="block text-sm font-medium text-slate-700"> Password <input${ssrRenderAttr("value", unref(loginForm).password)} type="password" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400 focus:bg-white" placeholder="••••••••"></label><div class="flex items-center justify-between text-xs text-slate-500"><label class="inline-flex items-center gap-2"><input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-violet-600">Remember me</label><button type="button" class="font-semibold text-violet-700">Forgot password?</button></div><button type="submit" class="w-full rounded-2xl bg-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-500">Sign in</button></form>`);
				else _push(`<form class="mt-6 space-y-4"><label class="block text-sm font-medium text-slate-700"> Full name <input${ssrRenderAttr("value", unref(registerForm).name)} type="text" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400 focus:bg-white"></label><label class="block text-sm font-medium text-slate-700"> Email address <input${ssrRenderAttr("value", unref(registerForm).email)} type="email" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400 focus:bg-white"></label><label class="block text-sm font-medium text-slate-700"> Organisation / CSO <input${ssrRenderAttr("value", unref(registerForm).organisation)} type="text" class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none ring-0 transition focus:border-violet-400 focus:bg-white"></label><label class="block text-sm font-medium text-slate-700"> Preferred language <select class="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm outline-none transition focus:border-violet-400 focus:bg-white"><option${ssrIncludeBooleanAttr(Array.isArray(unref(registerForm).language) ? ssrLooseContain(unref(registerForm).language, null) : ssrLooseEqual(unref(registerForm).language, null)) ? " selected" : ""}>English</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(registerForm).language) ? ssrLooseContain(unref(registerForm).language, null) : ssrLooseEqual(unref(registerForm).language, null)) ? " selected" : ""}>Sesotho</option></select></label><button type="submit" class="w-full rounded-2xl bg-violet-600 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-500">Create account</button></form>`);
				_push(`</div></section>`);
			} else {
				_push(`<section class="mt-8 space-y-6"><div class="grid gap-4 md:grid-cols-4"><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Course progress" : "Tsoelopele ea thuto")}</p><div class="mt-4 flex items-end justify-between"><div><div class="text-3xl font-black tracking-tight">${ssrInterpolate(unref(overallCourseProgress))}%</div><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Overall completion" : "Ho phethoa ka kakaretso")}</p></div><div class="rounded-2xl bg-violet-100 p-2 text-violet-700">`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-chart-no-axes-combined",
					class: "size-5"
				}, null, _parent));
				_push(`</div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Completed" : "E phethiloeng")}</p><div class="mt-4 flex items-end justify-between"><div><div class="text-3xl font-black tracking-tight">${ssrInterpolate(unref(completedCount))}</div><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Modules complete" : "Mojule o phethiloeng")}</p></div><div class="rounded-2xl bg-emerald-100 p-2 text-emerald-700">`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-circle-check",
					class: "size-5"
				}, null, _parent));
				_push(`</div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Current module" : "Mojule oa hajoale")}</p><div class="mt-4 flex items-end justify-between"><div><div class="text-3xl font-black tracking-tight">${ssrInterpolate(unref(currentModule).id)}</div><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Active learning path" : "Tsela ea ho ithuta")}</p></div><div class="rounded-2xl bg-indigo-100 p-2 text-indigo-700">`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-book-open",
					class: "size-5"
				}, null, _parent));
				_push(`</div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Overall score" : "Lintlha ka kakaretso")}</p><div class="mt-4 flex items-end justify-between"><div><div class="text-3xl font-black tracking-tight">${ssrInterpolate(unref(latestResult) ? unref(latestResult).score + "%" : "82%")}</div><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Latest quiz result" : "Phetho ea qotso ea morao-rao")}</p></div><div class="rounded-2xl bg-amber-100 p-2 text-amber-700">`);
				_push(ssrRenderComponent(_component_UIcon, {
					name: "i-lucide-award",
					class: "size-5"
				}, null, _parent));
				_push(`</div></div></div></div><div class="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]"><div class="space-y-6"><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center justify-between gap-4"><div><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Course path" : "Tsela ea thuto")}</p><h3 class="mt-2 text-xl font-bold">${ssrInterpolate(unref(language) === "en" ? "Race for Parliament Toolkit" : "Race for Parliament Toolkit")}</h3></div><button type="button" class="rounded-full border border-violet-200 bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">${ssrInterpolate(unref(currentRole) === "participant" ? unref(language) === "en" ? "Switch to admin" : "Fetola ho admin" : unref(language) === "en" ? "Switch to participant" : "Fetola ho mosebedisi")}</button></div><div class="mt-6 space-y-4"><!--[-->`);
				ssrRenderList(unref(modules), (module, index) => {
					_push(`<button type="button" class="${ssrRenderClass([module.status === "locked" ? "cursor-not-allowed border-slate-200 bg-slate-50 opacity-70" : unref(activeModuleIndex) === index ? "border-violet-300 bg-violet-50 shadow-sm" : "border-slate-200 bg-white hover:border-violet-200 hover:bg-violet-50/40", "w-full rounded-2xl border p-4 text-left transition"])}"><div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><div class="flex items-center gap-2"><span class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Module" : "Mojule")} ${ssrInterpolate(module.id)}</span><span class="${ssrRenderClass([module.status === "completed" ? "bg-emerald-100 text-emerald-700" : module.status === "current" ? "bg-violet-100 text-violet-700" : module.status === "in-progress" ? "bg-amber-100 text-amber-700" : "bg-slate-200 text-slate-600", "rounded-full px-2 py-1 text-[10px] font-semibold"])}">${ssrInterpolate(module.status === "completed" ? unref(language) === "en" ? "Completed" : "E phethiloeng" : module.status === "locked" ? unref(language) === "en" ? "Locked" : "E koetsoe" : module.status === "current" ? unref(language) === "en" ? "Current" : "Hajoale" : unref(language) === "en" ? "In progress" : "E tsoela pele")}</span></div><h4 class="mt-2 text-lg font-bold">${ssrInterpolate(unref(language) === "en" ? module.titleEn : module.titleSt)}</h4><p class="mt-1 text-sm text-slate-500">${ssrInterpolate(unref(language) === "en" ? module.descriptionEn : module.descriptionSt)}</p></div><div class="w-full max-w-[170px] sm:w-[170px]"><div class="mb-1 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500"><span>${ssrInterpolate(unref(language) === "en" ? "Progress" : "Tsoelopele")}</span><span>${ssrInterpolate(module.progress)}%</span></div><div class="h-2.5 overflow-hidden rounded-full bg-slate-200"><div class="h-full rounded-full bg-violet-600" style="${ssrRenderStyle({ width: module.progress + "%" })}"></div></div></div></div></button>`);
				});
				_push(`<!--]--></div></div><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><div class="flex items-center justify-between gap-3"><div><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Current module" : "Mojule oa hajoale")}</p><h3 class="mt-2 text-xl font-bold">${ssrInterpolate(unref(language) === "en" ? unref(currentModule).titleEn : unref(currentModule).titleSt)}</h3></div>`);
				if (unref(currentModule).status !== "locked") _push(`<button type="button" class="rounded-full bg-violet-600 px-3 py-2 text-xs font-bold text-white shadow-lg shadow-violet-200">${ssrInterpolate(unref(language) === "en" ? "Continue learning" : "Tsoela pele ho ithuta")}</button>`);
				else _push(`<!---->`);
				_push(`</div><div class="mt-6 space-y-5"><!--[-->`);
				ssrRenderList(unref(currentModule).material, (item) => {
					_push(`<div class="rounded-2xl border border-slate-200 bg-slate-50 p-4"><h4 class="text-base font-bold">${ssrInterpolate(unref(language) === "en" ? item.titleEn : item.titleSt)}</h4><p class="mt-2 text-sm leading-6 text-slate-600">${ssrInterpolate(unref(language) === "en" ? item.bodyEn : item.bodySt)}</p></div>`);
				});
				_push(`<!--]--></div><div class="mt-7 rounded-2xl border border-violet-200 bg-violet-50 p-4"><div class="mb-3 flex items-center justify-between gap-3"><div><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-violet-700">${ssrInterpolate(unref(language) === "en" ? "Quiz" : "Qotso")}</p><h4 class="mt-1 text-lg font-bold">${ssrInterpolate(unref(language) === "en" ? "Module assessment" : "Tlhahlobo ea mojule")}</h4></div><div class="rounded-full bg-white px-2.5 py-1 text-xs font-bold text-violet-700">${ssrInterpolate(unref(currentModule).quiz.length)} ${ssrInterpolate(unref(language) === "en" ? "questions" : "lipotso")}</div></div><!--[-->`);
				ssrRenderList(unref(currentModule).quiz, (question) => {
					_push(`<div class="mt-5 rounded-2xl border border-violet-100 bg-white p-4"><p class="text-sm font-semibold text-slate-800">${ssrInterpolate(unref(language) === "en" ? question.promptEn : question.promptSt)}</p>`);
					if (question.type === "single" || question.type === "truefalse") {
						_push(`<div class="mt-3 space-y-2"><!--[-->`);
						ssrRenderList(question.options, (option) => {
							_push(`<label class="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:border-violet-200 hover:bg-violet-50"><input${ssrIncludeBooleanAttr((unref(moduleAnswers)[unref(currentModule).id]?.[question.id] || []).includes(option.value)) ? " checked" : ""} type="radio"${ssrRenderAttr("name", question.id)}${ssrRenderAttr("value", option.value)} class="h-4 w-4 border-slate-300 text-violet-600 focus:ring-violet-500"><span class="text-sm text-slate-700">${ssrInterpolate(unref(language) === "en" ? option.labelEn : option.labelSt)}</span></label>`);
						});
						_push(`<!--]--></div>`);
					} else {
						_push(`<div class="mt-3 space-y-2"><!--[-->`);
						ssrRenderList(question.options, (option) => {
							_push(`<label class="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-3 py-2 transition hover:border-violet-200 hover:bg-violet-50"><input${ssrIncludeBooleanAttr((unref(moduleAnswers)[unref(currentModule).id]?.[question.id] || []).includes(option.value)) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", option.value)} class="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500"><span class="text-sm text-slate-700">${ssrInterpolate(unref(language) === "en" ? option.labelEn : option.labelSt)}</span></label>`);
						});
						_push(`<!--]--></div>`);
					}
					_push(`</div>`);
				});
				_push(`<!--]--><div class="mt-5 flex flex-col items-start justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center"><div><p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Attempt policy" : "Mokhoa oa teko")}</p><p class="mt-1 text-sm text-slate-600">${ssrInterpolate(unref(language) === "en" ? "Allowed attempts: 3" : "Liteko tse lumelletsoeng: 3")}</p></div><button type="button" class="rounded-full bg-violet-600 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-violet-200">${ssrInterpolate(unref(language) === "en" ? "Submit quiz" : "Romela qotso")}</button></div>`);
				if (unref(latestResult)) _push(`<div class="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"><p class="text-xs font-bold uppercase tracking-[0.2em]">${ssrInterpolate(unref(latestResult).passed ? unref(language) === "en" ? "Pass" : "Phehella" : unref(language) === "en" ? "Retake recommended" : "Ho khothalletsoa ho boela")}</p><p class="mt-2 text-lg font-black">${ssrInterpolate(unref(latestResult).score)}% ${ssrInterpolate(unref(language) === "en" ? "score" : "lintlha")}</p><p class="mt-1 text-sm text-emerald-800">${ssrInterpolate(unref(language) === "en" ? "Attempt" : "Teko")} ${ssrInterpolate(unref(latestResult).attempts)}</p></div>`);
				else _push(`<!---->`);
				_push(`</div></div></div><aside class="space-y-6"><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Profile" : "Boitsebiso")}</p><div class="mt-4 flex items-center gap-3"><div class="grid size-12 place-items-center rounded-2xl bg-violet-100 text-sm font-bold text-violet-700">MM</div><div><p class="font-bold">Mpho Mokete</p><p class="text-sm text-slate-500">mpho@parliament.org</p></div></div><div class="mt-5 space-y-3 text-sm text-slate-600"><div class="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"><span>${ssrInterpolate(unref(language) === "en" ? "Preferred language" : "Puo eo u e ratang")}</span><span class="font-semibold text-slate-800">${ssrInterpolate(unref(languageLabel))}</span></div><div class="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"><span>${ssrInterpolate(unref(language) === "en" ? "Organisation" : "Mokhatlo")}</span><span class="font-semibold text-slate-800">CSO Alliance</span></div><div class="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2"><span>${ssrInterpolate(unref(language) === "en" ? "Registration date" : "Letsatsi la ngoliso")}</span><span class="font-semibold text-slate-800">12 Apr 2026</span></div></div></div><div class="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"><p class="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(currentRole) === "participant" ? unref(language) === "en" ? "Progress snapshot" : "Pono ea tsoelopele" : unref(language) === "en" ? "Admin monitoring" : "Tlhokomelo ea admin")}</p>`);
				if (unref(currentRole) === "participant") _push(`<div class="mt-4 space-y-4"><div class="rounded-2xl bg-slate-50 p-3"><div class="flex items-center justify-between text-sm"><span class="text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Current module" : "Mojule oa hajoale")}</span><span class="font-bold">${ssrInterpolate(unref(language) === "en" ? unref(currentModule).titleEn : unref(currentModule).titleSt)}</span></div></div><div class="rounded-2xl bg-slate-50 p-3"><div class="flex items-center justify-between text-sm"><span class="text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Completion status" : "Boemo ba ho qeta")}</span><span class="font-bold text-violet-700">${ssrInterpolate(unref(overallCourseProgress))}%</span></div></div><div class="rounded-2xl bg-slate-50 p-3"><div class="flex items-center justify-between text-sm"><span class="text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Quiz attempts" : "Liteko tsa qotso")}</span><span class="font-bold">${ssrInterpolate(unref(currentModule).attempts)}</span></div></div></div>`);
				else {
					_push(`<div class="mt-4 space-y-3"><div class="rounded-2xl border border-slate-200 bg-slate-50 p-3"><p class="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">${ssrInterpolate(unref(language) === "en" ? "Participants" : "Bankakarolo")}</p><div class="mt-3 space-y-2"><!--[-->`);
					ssrRenderList(adminParticipants, (person) => {
						_push(`<div class="rounded-xl bg-white p-2 text-sm"><div class="flex items-center justify-between gap-2"><span class="font-semibold">${ssrInterpolate(person.name)}</span><span class="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold text-violet-700">${ssrInterpolate(person.status)}</span></div><p class="mt-1 text-xs text-slate-500">${ssrInterpolate(person.progress)}% progress • ${ssrInterpolate(person.overall)}% score</p></div>`);
					});
					_push(`<!--]--></div></div></div>`);
				}
				_push(`</div></aside></div></section>`);
			}
			_push(`</div></div>`);
		};
	}
});
//#endregion
//#region app/pages/index.vue
var _sfc_setup = index_vue_vue_type_script_setup_true_lang_default.setup;
index_vue_vue_type_script_setup_true_lang_default.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var pages_default = index_vue_vue_type_script_setup_true_lang_default;

export { pages_default as default };
//# sourceMappingURL=pages-DvHdapG7.mjs.map
