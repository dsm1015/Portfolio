import projects from '$lib/projects';
import {error} from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({params}) {
	const project = projects.find((project) => project.slug === params.project);

	if (!project) throw error(404, 'Project not found');
	return {
		project
	};
}