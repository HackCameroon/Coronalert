"""empty message

Revision ID: fabe88596e07
Revises: 
Create Date: 2020-03-26 21:43:49.551049

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fabe88596e07'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('location', sa.Column('last_change_time', sa.DateTime(), nullable=True))
    op.add_column('user', sa.Column('last_updated', sa.DateTime(), nullable=True))
    op.add_column('user', sa.Column('prev_stats', sa.JSON(), nullable=True))
    op.create_foreign_key(None, 'user_location_table', 'location', ['location_id'], ['id'])
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint(None, 'user_location_table', type_='foreignkey')
    op.drop_column('user', 'prev_stats')
    op.drop_column('user', 'last_updated')
    op.drop_column('location', 'last_change_time')
    # ### end Alembic commands ###
