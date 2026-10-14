export interface CourseOption {
  value: string
  labelEn: string
  labelSt: string
}

export interface CourseQuestion {
  id: string
  type: 'single' | 'multiple' | 'truefalse'
  promptEn: string
  promptSt: string
  options: CourseOption[]
}

export interface CourseMaterial {
  titleEn: string
  titleSt: string
  bodyEn: string
  bodySt: string
}

export interface CourseModule {
  id: number
  titleEn: string
  titleSt: string
  descriptionEn: string
  descriptionSt: string
  material: CourseMaterial[]
  quiz: CourseQuestion[]
}

export const courseId = 'race-for-parliament'

export const courseModules: CourseModule[] = [
  {
    id: 1,
    titleEn: 'Civic Participation',
    titleSt: 'Ho kenya letsoho seterekeng',
    descriptionEn: 'Understand the democratic process, rights and responsibilities of citizens.',
    descriptionSt: 'Utloisisa tshebetso ya demokrasi, ditokelo le maikarabelo a baahi.',
    material: [
      { titleEn: 'What is democratic participation?', titleSt: 'Ho kenya letsoho demokrasi ke eng?', bodyEn: 'Civic participation is the active involvement of citizens in decisions, elections, policy processes and community development.', bodySt: 'Ho kenya letsoho seterekeng ke ho nka karolo ka mafolofolo ho dipuisano, dikgethong, dipolotiking le ntshetsopele ya setjhaba.' },
      { titleEn: 'Rights and responsibilities', titleSt: 'Ditokelo le maikarabelo', bodyEn: 'Citizens have the right to vote, speak, organise and access information, while also carrying responsibilities to respect the law and participate responsibly.', bodySt: 'Baahi ba na le tokelo ya ho khetha, ho bua, ho hlophisa le ho fumana tlhahisoleseding, mme hape ba na le maikarabelo a ho hlompha molao le ho nka karolo ka boikarabelo.' },
    ],
    quiz: [
      { id: 'm1q1', type: 'single', promptEn: 'Which basic action shows active citizenship?', promptSt: 'Ke ketso efe ya motheo e bontshang botho ba setjhaba?', options: [{ value: 'a', labelEn: 'Voting in elections', labelSt: 'Ho vouta dikgethong' }, { value: 'b', labelEn: 'Ignoring community issues', labelSt: 'Ho hlokomoloha mathata a setjhaba' }, { value: 'c', labelEn: 'Avoiding public discussion', labelSt: 'Ho qoba dipuisano tsa setjhaba' }] },
      { id: 'm1q2', type: 'truefalse', promptEn: 'Citizens can participate by attending public consultations.', promptSt: 'Baahi ba ka nka karolo ka ho ea lipuisanong tsa setjhaba.', options: [{ value: 'true', labelEn: 'True', labelSt: 'Nnete' }, { value: 'false', labelEn: 'False', labelSt: 'Nnete ha e joalo' }] },
      { id: 'm1q3', type: 'multiple', promptEn: 'Choose the responsibilities of a citizen.', promptSt: 'Kgetha maikarabelo a moahi.', options: [{ value: 'respect-law', labelEn: 'Respect the law', labelSt: 'Ho hlompha molao' }, { value: 'spread-hate', labelEn: 'Spread hate speech', labelSt: 'Ho jala puo ya lehloeo' }, { value: 'vote', labelEn: 'Vote when eligible', labelSt: 'Ho vouta ha a loketse' }] },
    ],
  },
  {
    id: 2,
    titleEn: 'Election Awareness',
    titleSt: 'Tsebo ka dikgetho',
    descriptionEn: 'Learn how elections work, voter rights, and accountability in local democracy.',
    descriptionSt: 'Ithute hore dikgetho di sebetsa joang, ditokelo tsa bakhethi le boikarabelo demokrasi ya lehae.',
    material: [
      { titleEn: 'Voter registration', titleSt: 'Ho ingodisa ho khetha', bodyEn: 'Voters must be registered and remain informed about election procedures and deadlines.', bodySt: 'Bakhethi ba tlameha ho ingodisa mme ba be ba tsebe mekhoa le linako tsa dikgetho.' },
      { titleEn: 'Why accountability matters', titleSt: 'Hobaneng boikarabelo bo le bohlokoa', bodyEn: 'Elected leaders are accountable to citizens through regular reporting, public oversight and elections.', bodySt: 'Baetapele ba khethiloeng ba ikarabella ho baahi ka tlaleho, tekolo ya setjhaba le dikgetho.' },
    ],
    quiz: [
      { id: 'm2q1', type: 'single', promptEn: 'What is one key requirement for voting?', promptSt: 'Ke eng e leng tlhokahalo e le nngwe bakeng sa ho vouta?', options: [{ value: 'be-registered', labelEn: 'Be registered', labelSt: 'Ho ingodisa' }, { value: 'skip-education', labelEn: 'Skip civic education', labelSt: 'Ho tlolela thuto ya setjhaba' }, { value: 'ignore-law', labelEn: 'Ignore the law', labelSt: 'Ho hlokomoloha molao' }] },
      { id: 'm2q2', type: 'truefalse', promptEn: 'Elected officials are expected to be accountable to the public.', promptSt: 'Baetapele ba khethiloeng ba lebelletsoe ho ikarabella ho setjhaba.', options: [{ value: 'true', labelEn: 'True', labelSt: 'Nnete' }, { value: 'false', labelEn: 'False', labelSt: 'Nnete ha e joal' }] },
    ],
  },
  {
    id: 3,
    titleEn: 'Policy and Advocacy',
    titleSt: 'Leano le boipiletso',
    descriptionEn: 'Explore policy issues, advocacy tools and how citizens can influence decision making.',
    descriptionSt: 'Hlahloba mathata a maano, disebediswa tsa boipiletso le kamoo baahi ba ka susumetsang ho etswa diqeto.',
    material: [
      { titleEn: 'Forming a policy view', titleSt: 'Ho theha pono ya leano', bodyEn: 'Strong policy advocacy relies on evidence, data, lived experience and respectful communication.', bodySt: 'Boipiletso ba maano bo itšetlehile ka bopaki, datha, boiphihlelo le puisano e hlomphehang.' },
      { titleEn: 'Engaging stakeholders', titleSt: 'Ho kenya letsoho ho ba amehang', bodyEn: 'Citizens can build coalitions, participate in consultations, and present recommendations to leaders.', bodySt: 'Baahi ba ka theha linthano, ba nka karolo dipuisanong le ho nehelana ka dikgololo ho baetapele.' },
    ],
    quiz: [
      { id: 'm3q1', type: 'single', promptEn: 'Which item strengthens advocacy?', promptSt: 'Ke eng e matlafatsang boipiletso?', options: [{ value: 'evidence', labelEn: 'Evidence and facts', labelSt: 'Bopaki le dintlha' }, { value: 'silence', labelEn: 'Silence', labelSt: 'Khutsitseng' }, { value: 'rumour', labelEn: 'Rumours and fear', labelSt: 'Metswalle e tšosang' }] },
      { id: 'm3q2', type: 'multiple', promptEn: 'Select effective advocacy actions.', promptSt: 'Kgetha diketso tse sebetsang tsa boipiletso.', options: [{ value: 'consultation', labelEn: 'Attend consultations', labelSt: 'Ho ea lipuisanong' }, { value: 'petition', labelEn: 'Submit a petition', labelSt: 'Ho isa petishene' }, { value: 'ignore', labelEn: 'Ignore the issue', labelSt: 'Ho hlokomoloha bothata' }] },
    ],
  },
  {
    id: 4,
    titleEn: 'Leadership and Governance',
    titleSt: 'Boetapele le puso',
    descriptionEn: 'Understand how good governance supports fairness, service delivery and public trust.',
    descriptionSt: 'Utloisisa hore puso e ntle e tshehetsa ho lekana, ho fana ka ditshebeletso le tumelo ya setjhaba.',
    material: [
      { titleEn: 'Principles of good governance', titleSt: 'Melao ya puso e ntle', bodyEn: 'Good governance means transparency, accountability, participation, inclusion and rule-based decision making.', bodySt: 'Puso e ntle e bolela ho hlaka, boikarabelo, ho nka karolo, ho kenyeletsa batho bohle le ho etsa diqeto ho latela molao.' },
      { titleEn: 'Public trust and service delivery', titleSt: 'Tumelo ya setjhaba le ho fana ka ditshebeletso', bodyEn: 'When institutions are transparent and responsive, citizens trust them and participate more meaningfully.', bodySt: 'Ha ditheo di hlakile le di arabela, baahi ba di tshepa mme ba nka karolo ka mokhoa o tebileng.' },
    ],
    quiz: [
      { id: 'm4q1', type: 'single', promptEn: 'What is a governance principle?', promptSt: 'Ke molawana ofe wa puso?', options: [{ value: 'transparency', labelEn: 'Transparency', labelSt: 'Ho hlaka' }, { value: 'silence', labelEn: 'Silence', labelSt: 'Khutsitseng' }, { value: 'exclusion', labelEn: 'Exclusion', labelSt: 'Ho qheleha ka thoko' }] },
      { id: 'm4q2', type: 'truefalse', promptEn: 'Public trust grows when institutions are open and responsive.', promptSt: 'Tumelo ya setjhaba e hola ha ditheo di bulehile ebile di arabela.', options: [{ value: 'true', labelEn: 'True', labelSt: 'Nnete' }, { value: 'false', labelEn: 'False', labelSt: 'Nnete ha e joal' }] },
    ],
  },
]
