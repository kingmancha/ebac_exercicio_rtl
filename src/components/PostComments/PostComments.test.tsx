import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from './index';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
    render(<PostComments />);
    expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar e renderizar dois comentários', () => {
    render(<PostComments />);

    
    fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: 'Primeiro comentário!' } });
    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(screen.getByText('Primeiro comentário!')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('comment-textarea'), { target: { value: 'Segundo comentário!' } });
    fireEvent.submit(screen.getByTestId('comment-form'));

    expect(screen.getByText('Segundo comentário!')).toBeInTheDocument();
    });
});