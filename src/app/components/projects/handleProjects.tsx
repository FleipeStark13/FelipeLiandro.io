export interface iProject {
    project_name: string,
    project_description: string,
    project_large_description: string
    project_link: string
}


export const Python_Projects: iProject[] = [
    {
        project_name: 'Desafio Python',
        project_description: 'Um desafio de vaga feito em python.',
        project_large_description: "Este foi um desafio que fiz por estudo para uma oportunidade de vaga de emrpego. O objetivo princpal era criar um programa GRUD para poder adicionar, remover e atualizar vagas de emprego dentro de um sistema.",
        project_link: 'https://github.com/FleipeStark13/Desafio-Python-1'
    },
]

export const React_Projects: iProject[] = [
	{
		project_name: 'Site Coocerqui Drogaria',
		project_description: 'Coocerqui Drogaria, precisava de um site reformulado.',
		project_large_description: 'Dentro deste site, acabei criando todo o front-end em Figma e também o Back-end em React. Sendo um dos principais desafios de início, trabalhar com filtros de objetos. Pensando em como deixar reativo a página de filtro de lojas.',
		project_link: 'https://github.com/FleipeStark13/Site-Coocerqui-Drogaria'
	},
	{
		project_name: 'Coocerqui - Econômetro',
		project_description: 'Um projeto que expõe aos clientes e cooperado da Coocerqui, o valor que economizaram até o dia atual.',
		project_large_description: 'Este foi um desafio matemático e também de pessoal, de criar um site onde é guardado o valor semanal de quanto os clientes economizaram até o dia atual em que ele está vendo. A principal diferença é que o valor é contabilizado por segundo, e reflete o valo real a cada segundo naquele dia. Não tive a oportunidade de melhorar o projeto, trabalhando com algum framework ou banco de dados, mas consegui adapatar da melhor forma possível',
		project_link: 'https://github.com/FleipeStark13/Econometro'
	}
]

export const Database_Projects: iProject[] = [
	{
		project_name: '',
		project_description: '',
		project_large_description: '',
		project_link: ''
	}
]
