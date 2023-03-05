import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';

@Entity()
export class UserEntity {
  @PrimaryColumn()
  @ApiProperty({
    description: '유저 고유번호',
    required: false,
    deprecated: true,
  })
  _id: string;

  @ApiProperty({
    description: '일반 사용자일 경우 True',
    required: true,
    example: 'true',
  })
  @Column()
  @IsBoolean()
  common: boolean;

  @ApiProperty({ description: '아이디', required: true, example: 'testID' })
  @Column()
  @Index({ unique: true })
  @IsString()
  id: string;

  @ApiProperty({ description: '비밀번호', required: true, example: 'testPW' })
  @Column()
  @IsString()
  pw: string;

  @ApiProperty({
    description: '사용자 이름',
    required: true,
    example: '홍길동',
  })
  @Column()
  @IsString()
  name: string;

  @ApiProperty({
    description: '국가 정보',
    required: true,
    example: '대한민국',
  })
  @Column()
  @IsString()
  nation: string;

  @ApiProperty({
    description: '이메일',
    required: true,
    example: 'test@test.com',
  })
  @Column()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: '휴대폰 번호 (국가 코드 불필요)',
    required: true,
    example: '01012345678',
  })
  @Column()
  @IsNumber()
  phone: number;

  @ApiProperty({
    description: '사용할 닉네임',
    required: true,
    example: 'testNickname',
  })
  @Column()
  @IsString()
  nickname: string;

  @ApiProperty({ description: '프로필 이미지 저장 경로', example: '/' })
  @Column({ default: '/' })
  profileimg: string;
}
