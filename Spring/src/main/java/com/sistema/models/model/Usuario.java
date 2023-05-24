package com.sistema.models.model;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.persistence.JoinColumn;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Table(name="TAB_USUARIO")
public class Usuario implements UserDetails {
	
	private static final long serialVersionUID = -1189182405939351854L;
	
	private Long    id;
	private String  username;
	private String  password;
	private String  confirmePassword;
	private String  email;
	private boolean ativo = false;
	private Integer failedLogin = 0;
	private Date    dataVencimentoSenha;
	private String  foto;
	private String  contentType;
	private String  codigoUUID;
	
	private List<Role> listaRoles = new ArrayList<>();
	
	
	public Usuario() {
	
	}

	public Usuario(Long id, String username, String password, String confirmePassword, String email, boolean ativo,
			Integer failedLogin, Date dataVencimentoSenha, String foto, String contentType) {
		this.id = id;
		this.username = username;
		this.password = password;
		this.confirmePassword = confirmePassword;
		this.email = email;
		this.ativo = ativo;
		this.failedLogin = failedLogin;
		this.dataVencimentoSenha = dataVencimentoSenha;
		this.foto = foto;
		this.contentType = contentType;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "USUARIO_SEQ")
	@SequenceGenerator(sequenceName = "SEQUENCE_USUARIO",initialValue = 1,allocationSize = 1, name="USUARIO_SEQ")
	@Column(name="id")
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	@Transient
	public String getConfirmePassword() {
		return confirmePassword;
	}

	public void setConfirmePassword(String confirmePassword) {
		this.confirmePassword = confirmePassword;
	}

	@Column(name="EMAIL", length = 100, nullable = false, unique = true )
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Column(name="ativo")
	public boolean isAtivo() {
		return ativo;
	}

	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}

	@Column(name="FALHA_LOGIN", nullable = true)
	public Integer getFailedLogin() {
		return failedLogin;
	}

	public void setFailedLogin(Integer failedLogin) {
		this.failedLogin = failedLogin;
	}

	@DateTimeFormat(pattern="dd/MM/yyyy")
	@Temporal(TemporalType.DATE)
	@Column(name="DATA", nullable = true)
	public Date getDataVencimentoSenha() {
		return dataVencimentoSenha;
	}

	public void setDataVencimentoSenha(Date dataVencimentoSenha) {
		this.dataVencimentoSenha = dataVencimentoSenha;
	}

	@Column(name="FOTO", length = 100, nullable = true)
	public String getFoto() {
		return foto;
	}

	public void setFoto(String foto) {
		this.foto = foto;
	}

	@Column(name="CONTENT_TYPE", length = 30, nullable = true)
	public String getContentType() {
		return contentType;
	}

	@Column(name="CODIGO_UUID",length = 100, nullable = false)
	public String getCodigoUUID() {
		return codigoUUID;
	}

	public void setCodigoUUID(String codigoUUID) {
		this.codigoUUID = codigoUUID;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	@Transient
	public Collection<? extends GrantedAuthority> getAuthorities() {
		List<GrantedAuthority> autoridade = new ArrayList<>();
		for (Role role: this.getListaRoles()) {
			autoridade.add(new SimpleGrantedAuthority("ROLE_"+role.getNome().toUpperCase()));
		}
		return autoridade;
	}
	
	@ManyToMany(fetch = FetchType.LAZY)
	@JoinTable(name="TAB_USUARIO_ROLE",
			   joinColumns= { @JoinColumn(name="usuario_id",referencedColumnName="id")},
			   inverseJoinColumns = {@JoinColumn(name="role_id", referencedColumnName="id")})
	public List<Role> getListaRoles() {
		return listaRoles;
	}

	public void setListaRoles(List<Role> listaRoles) {
		this.listaRoles = listaRoles;
	}

	@Override
	@Column(name="PASSWORD", length = 100, nullable = false )
	public String getPassword() {
		return password;
	}

	@Override
	@Column(name="username", length = 100, nullable = false )
	public String getUsername() {
		return username;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

	@Override
	@Transient
	public boolean isAccountNonExpired() {
		return this.ativo;
	}

	@Override
	@Transient
	public boolean isAccountNonLocked() {
		return this.ativo;
	}

	@Override
	@Transient
	public boolean isCredentialsNonExpired() {
		return this.ativo;
	}

	@Override
	@Transient
	public boolean isEnabled() {
		return this.ativo;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Usuario other = (Usuario) obj;
		return Objects.equals(id, other.id);
	}

	@Override
	public String toString() {
		return "Usuario [id=" + id + ", username=" + username + ", password=" + password + ", confirmePassword="
				+ confirmePassword + ", email=" + email + ", ativo=" + ativo + ", failedLogin=" + failedLogin
				+ ", dataVencimentoSenha=" + dataVencimentoSenha + ", foto=" + foto + ", contentType=" + contentType
				+ ", codigoUUID=" + codigoUUID + "]";
	}
	
	
     
}
