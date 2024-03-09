import {projects} from '$lib/projects';
import {error} from '@sveltejs/kit';
import { loadHtmlContent } from '$lib/server-utils';

export async function load({params}) {
	const project = projects.find((project) => project.slug === params.project);

	if (!project) throw error(404, 'Project not found');

	// Load HTML content from file
	const htmlContent = await loadHtmlContent(project.slug + '.html');
	project.content = htmlContent;

	return {
		project
	};
}