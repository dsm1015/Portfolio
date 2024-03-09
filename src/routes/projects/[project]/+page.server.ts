import {projects} from '$lib/projects';
import {error} from '@sveltejs/kit';
import { loadHtmlContent } from '$lib/server-utils';

export async function load({ params, fetch }) { 
    const project = projects.find((project) => project.slug === params.project);

    if (!project) throw error(404, 'Project not found');

    const htmlContent = await loadHtmlContent(fetch, `${project.slug}.html`);
    project.content = htmlContent;

    return {
        project
    };
}