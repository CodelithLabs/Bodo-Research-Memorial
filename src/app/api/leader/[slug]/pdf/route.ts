import { createElement, type ReactElement } from 'react';
import { renderToBuffer, type DocumentProps } from '@react-pdf/renderer';
import { LeaderPDF } from '@/components/LeaderPDF';
import { getLeaderBySlug } from '@/data/leaders';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);
  if (!leader) return new Response('Not found', { status: 404 });

  const document = createElement(LeaderPDF, { leader }) as unknown as ReactElement<DocumentProps>;
  const buffer = await renderToBuffer(document);
  const body = buffer as unknown as BodyInit;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${leader.name}.pdf"`,
    },
  });
}
