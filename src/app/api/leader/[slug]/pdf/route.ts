import { renderToBuffer } from '@react-pdf/renderer';
import { LeaderPDF } from '@/components/LeaderPDF';
import { getLeaderBySlug } from '@/data/leaders';

export async function GET(
  _request: Request,
  { params }: { params: { slug: string } }
) {
  const leader = getLeaderBySlug(params.slug);
  if (!leader) return new Response('Not found', { status: 404 });

  const buffer = await renderToBuffer(<LeaderPDF leader={leader} />);

  return new Response(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${leader.name}.pdf"`,
    },
  });
}
