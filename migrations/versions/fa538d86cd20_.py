"""empty message

Revision ID: fa538d86cd20
Revises: 8495a85a6a09
Create Date: 2020-04-04 11:20:53.492455

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'fa538d86cd20'
down_revision = '8495a85a6a09'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('flagged', sa.Boolean(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('user', 'flagged')
    # ### end Alembic commands ###
